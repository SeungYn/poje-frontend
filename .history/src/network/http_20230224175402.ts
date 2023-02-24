import TokenStorage from '@src/db/localStorage';
import LocalStorage from '@src/db/localStorage';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export default class Http {
  private static instance: Http;
  private readonly client: AxiosInstance;
  private isTokenRefreshing = false;
  private reRequestWaitQueue: [() => void];

  private constructor(baseURL: string, private localStorage: LocalStorage) {
    this.client = axios.create({
      baseURL,
      withCredentials: true,
    });

    this.client.interceptors.request.use((req) => {
      //console.log('request :', req);
      req.headers.Authorization = `Bearer ${this.localStorage.get<string>(
        'TOKEN'
      )}`;
      return req;
    });
  }

  async fetchJson<R>(
    url: string,
    options: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> {
    const { data, method, headers } = options;
    const request = {
      url,
      method,
      headers: {
        ...headers,
      },
      data,
    };
    let res: AxiosResponse;
    try {
      res = await this.client(request);
      return res;
    } catch (e) {
      console.log('받은 에러', e);
      if (axios.isAxiosError(e)) {
        const originRequestConfig = e.config;
        if (e.response?.status === 401) {
          if (!this.isTokenRefreshing) {
            this.isTokenRefreshing = true;
            const re = await this.fetchJson('/reissue', {
              method: 'POST',
              headers: {
                accessToken: `${this.localStorage.get<string>('TOKEN')}`,
                refreshToken: cookies.get('refreshToken'),
              },
            });

            console.log(re, '리이슈 보낸결과');
            if (re.headers.authorization) {
              const accessToken = re.headers.authorization.split(' ')[1];
              this.localStorage.set<string>('TOKEN', accessToken);
              cookies.set('refreshToken', re.headers.refreshtoken, {
                maxAge: 60 * 60 * 24 * 7,
                path: '/',
              });
            }

            if (re.status === 400) {
              console.log('로그아웃 시켜야됨');
            }

            //취소된 요청 config을 다시 요청
            return new Promise((resolve) =>
              this.reRequestWaitQueue.push(() => {
                resolve(this.client({}));
              })
            );
            // this.client({
            //   ...e.config!,
            //   headers: {
            //     ...e.config?.headers,
            //   },
            // });
          }
        }

        const message = e.response?.data?.message;
        if (message) {
          throw new Error(message);
          //return Promise.reject(e);
        }
      }
      throw new Error('Connect Error');
      //리프레시 토큰
    }
  }

  onReRequest() {}

  //process.env.REACT_APP_BASE_URL as string,
  public static getHttpInstance() {
    const endPoint =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8080'
        : 'http://15.164.128.201:8080';
    if (!Http.instance) {
      Http.instance = new Http(
        'http://15.164.128.201:8080',
        new TokenStorage()
      );
    }
    return Http.instance;
  }
}
