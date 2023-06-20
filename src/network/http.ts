import TokenStorage from '@src/db/localStorage';
import LocalStorage from '@src/db/localStorage';
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export default class Http {
  private static instance: Http;
  private readonly client: AxiosInstance;
  private isTokenRefreshing = false;
  private reRequestWaitQueue: (() => void)[] = [];

  private constructor(baseURL: string, private localStorage: LocalStorage) {
    this.client = axios.create({
      baseURL,
      withCredentials: true,
      timeout: 3000,
    });

    this.client.interceptors.request.use((req) => {
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
      //console.log('받은 에러', e);
      if (axios.isAxiosError(e)) {
        const originRequestConfig = e.config;
        if (e.response?.status === 401) {
          if (!this.isTokenRefreshing) {
            //console.log('reissue 시작');
            this.setIsTokenRefreshing(true);
            try {
              const re = await this.fetchJson('/reissue', {
                method: 'POST',
                headers: {
                  accessToken: `${this.localStorage.get<string>('TOKEN')}`,
                  refreshToken: cookies.get('refreshToken'),
                },
              });

              if (re.headers.authorization) {
                const accessToken = re.headers.authorization.split(' ')[1];
                this.localStorage.set<string>('TOKEN', accessToken);
                cookies.set('refreshToken', re.headers.refreshtoken, {
                  maxAge: 60 * 60 * 24 * 7,
                  path: '/',
                });
              }
            } catch (e) {
              //todo 리프레시 토큰 만료시 처리
              this.localStorage.remove('TOKEN');
              cookies.remove('refreshToken', {
                maxAge: 60 * 60 * 24 * 7,
                path: '/',
              });
              window.location.href = '/auth/login';
              this.reRequestWaitQueue = [];
            }

            this.onReRequest();
            this.setIsTokenRefreshing(false);
            return this.client({
              ...originRequestConfig!,
              headers: {
                ...originRequestConfig?.headers,
              },
            });
          }

          //console.log('큐에 들어갈 요청들', originRequestConfig);
          return this.generateNewPromiseForWaitRequest(originRequestConfig!);
        }

        const message = e.response?.data?.message;
        if (message) {
          throw new Error(message);
          //return Promise.reject(e);
        }
      }
      throw new Error('현재 서버가 닫혀 있습니다.');
      //리프레시 토큰
    }
  }

  onReRequest() {
    //쌓여있는 요청들을 다 호출하기
    //console.log('현재 큐에 호출될 요청들', this.reRequestWaitQueue);
    this.reRequestWaitQueue.forEach((cb) => cb());
    //다 호출하면 비워주기
    this.reRequestWaitQueue = [];
  }

  setIsTokenRefreshing(state: boolean) {
    this.isTokenRefreshing = state;
  }

  generateNewPromiseForWaitRequest(
    originRequestConfig: InternalAxiosRequestConfig
  ): Promise<AxiosResponse<any>> {
    return new Promise((resolve) =>
      this.reRequestWaitQueue.push(() => {
        resolve(
          this.client({
            ...originRequestConfig!,
            headers: {
              ...originRequestConfig?.headers,
            },
          })
        );
      })
    );
  }

  //process.env.REACT_APP_BASE_URL as string,
  public static getHttpInstance() {
    // const endPoint =
    //   process.env.NODE_ENV === 'development'
    //     ? 'http://localhost:8080'
    //     : 'http://15.164.128.201:8080';
    if (!Http.instance) {
      Http.instance = new Http(
        process.env.REACT_APP_END_POINT!,
        new TokenStorage()
      );
    }
    return Http.instance;
  }
}
