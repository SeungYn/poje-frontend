import { AxiosRequestConfig } from 'axios';
import Http from '@src/network/http';
import { JobCategoryResponse } from '@src/service/types/jobCard';

export {};
export default class JobCardService {
  constructor(private http: Http) {}

  async getJobCategory() {
    const config: AxiosRequestConfig = {};
    return this.http.fetchJson<JobCategoryResponse>('/member/job', config);
  }

  async clickLike({});
}
