import { Axios, AxiosInstance } from 'axios';

export default class Http {
  private static instance: Http;
  private readonly client: AxiosInstance;
}
