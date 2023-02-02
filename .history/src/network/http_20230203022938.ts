import axios, { AxiosInstance } from 'axios';

export default class Http {
  private static instance: Http;
  private readonly client: AxiosInstance;
  private constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
    });
  }
}
