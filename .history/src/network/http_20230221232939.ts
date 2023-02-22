import TokenStorage from '@src/db/localStorage';
import LocalStorage from '@src/db/localStorage';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Cookies } from 'react-cookie';

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
      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (e.response?.status === 401) {
          const re = await this.client({
            url: '/reissue',
            method: 'POST',
            headers: {
              accessToken: `Bearer ${this.localStorage.get<string>('TOKEN')}`,
              refreshToken: cookies.get('refreshToken'),
            },
          });
          console.log('토큰 재전송', re);
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
                authorization: `Bearer ${accessToken}`,
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
    const endPoint =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8080'
        : 'http://15.164.128.201:8080';
    if (!Http.instance) {
      Http.instance = new Http(
        'https://f5ce32ed837f55.lhr.life',
        new TokenStorage()
      );
    }
    return Http.instance;
  }
}
