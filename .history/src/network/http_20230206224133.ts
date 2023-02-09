import TokenStorage from '@src/db/localStorage';
import LocalStorage from '@src/db/localStorage';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class Http {
  private static instance: Http;
  private readonly client: AxiosInstance;
  private constructor(baseURL: string, private localStorage: LocalStorage) {
    this.client = axios.create({
      baseURL,
    });

    this.client.interceptors.request.use((req) => {
      console.log('request :', req);
      console.log(123);
      //req.headers.Authorization = this.localStorage.get<string>('TOKEN');
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
        'Content-Type': 'application/json',
      },
      data,
    };
    let res: AxiosResponse;
    try {
      res = await this.client(request);
      console.log(res);
      return res;
    } catch (e) {
      console.log(e);
      if (axios.isAxiosError(e)) {
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
