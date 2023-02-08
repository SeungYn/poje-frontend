import { AxiosRequestConfig } from 'axios';
import Http from '@src/network/http';

export {};
export default class JobCardService {
  constructor(private http: Http) {}

  async getJobCategory() {
    const config: AxiosRequestConfig = {};
    return;
  }
}
