import { accessToken } from './../../.history/src/store/auth/auth_20230204225435';
import TokenStorage from '@src/db/localStorage';
import LocalStorage from '@src/db/localStorage';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Cookies, useCookies } from 'react-cookie';

const cookies = new Cookies();

export default class Http {
  private static instance: Http;
  private readonly client: AxiosInstance;
  private constructor(baseURL: string, private localStorage: LocalStorage) {
    this.client = axios.create({
      baseURL,
      withCredentials: true,
    });

    this.client.interceptors.request.use((req) => {
      console.log('request :', req);
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
      console.log(res);
      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (e.response?.status === 401) {
          console.log('status 401');
          const re = await this.client({
            url: '/reissue',
            headers: {
              accessToken: `Bearer ${this.localStorage.get<string>('TOKEN')}`,
              refreshToken: cookies.get('refreshToekn'),
            },
          });
          console.log('토큰 재전송');
          if (re.headers.authorization) {
            const accessToken = re.headers.authorization.split(' ')[1];
            this.localStorage.set<string>('TOKEN', accessToken);
            cookies.set('refreshToken', data.headers.refreshtoken, {
              maxAge: 60 * 60 * 24 * 7,
              path: '/',
            });

            //취소된 요청 config을 다시 요청
            return this.client({
              ...e.config!,
              headers: {
                ...e.config?.headers,
                hauthorization: `Bearer ${accessToken}`,
              },
            });
          }
        }
        const message = e.response?.data?.message;
        if (message) {
          throw new Error(message);
          //return Promise.reject(e);
        }
      }
      throw new Error('Connect Error');
    }
  }
  //process.env.REACT_APP_BASE_URL as string,
  public static getHttpInstance() {
    if (!Http.instance) {
      Http.instance = new Http('http://localhost:8080', new TokenStorage());
    }
    return Http.instance;
  }
}
