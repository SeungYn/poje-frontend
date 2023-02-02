import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export default class Http {
  private static instance: Http;
  private readonly client: AxiosInstance;
  private constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
    });
  }

  async fetchJson(url: string, options: AxiosRequestConfig) {
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
  }
}
