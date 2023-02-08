import { AxiosRequestConfig } from 'axios';
import Http from '@src/network/http';
import {
  JobCategoryResponse,
  LikeRequest,
  LikeResponse,
} from '@src/service/types/jobCard';

export {};
export default class JobCardService {
  constructor(private http: Http) {}

  async getJobCategory() {
    const config: AxiosRequestConfig = {
      method: 'GET',
    };
    return this.http.fetchJson<JobCategoryResponse>('/member/job', config);
  }

  async clickLike(data: LikeRequest) {
    const { portfolioId } = data;
    const config: AxiosRequestConfig = {
      method: 'POST',
    };
    return this.http.fetchJson<LikeResponse>(
      `/member/portfolio/${portfolioId}/heart`,
      config
    );
  }
}
