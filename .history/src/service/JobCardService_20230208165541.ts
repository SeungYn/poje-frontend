import { AxiosRequestConfig } from 'axios';
import Http from '@src/network/http';
import {
  JobCategoryResponse,
  JobPortfolioCardRequest,
  JobPortfolioCardResponse,
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
    const { data } = await this.http.fetchJson<JobCategoryResponse>(
      '/member/job',
      config
    );
    return data;
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

  async getPortfolioCards(data: JobPortfolioCardRequest) {
    const { name } = data;
    const config: AxiosRequestConfig = {
      method: 'GET',
    };
    return this.http.fetchJson<JobPortfolioCardResponse>(
      `/member/portfolios?name=${name}`,
      config
    );
  }
}
