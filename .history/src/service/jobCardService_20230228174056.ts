import { AxiosRequestConfig } from 'axios';
import Http from '@src/network/http';
import {
  GetPortfolioCardWithKeywordRequest,
  GetPortfoliosPagInfoRequest,
  GetPortfoliosPagInfoResponse,
  JobCategoryResponse,
  JobPortfolioCardRequest,
  JobPortfolioCardResponse,
  LikeRequest,
  LikeResponse,
} from '@src/service/types/jobCard';

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
    return data.result.jobInfoRespList;
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
    const { name, page } = data;
    const config: AxiosRequestConfig = {
      method: 'GET',
    };
    const {
      data: {
        result,
      },
    } = await this.http.fetchJson<JobPortfolioCardResponse>(
      `/member/portfolios?name=${name}&page=${page}`,
      config
    );
    return result;
  }

  async getPortfolioCardsWithKeyword(data: GetPortfolioCardWithKeywordRequest) {
    const { name, page, keyword } = data;
    const config: AxiosRequestConfig = {
      method: 'GET',
    };
    const {
      data: {
        result,
      },
    } = await this.http.fetchJson<JobPortfolioCardResponse>(
      `/member/portfolios?name=${name}&keyword=${keyword}&page=${page}`,
      config
      );
    console.log(result);
    return result;
  }

  async getPortfoliosPagInfo(data: GetPortfoliosPagInfoRequest){
    const {name, page} = data;

    const config:AxiosRequestConfig = {
      method:'GET',
    };

    const {
      data:{result},
    } = await this.http.fetchJson<GetPortfoliosPagInfoResponse>(`1`, config);

    return result;
  }
}
