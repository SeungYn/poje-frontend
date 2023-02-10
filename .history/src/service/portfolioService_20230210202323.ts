import { AxiosRequestConfig } from 'axios';
import Http from '@src/network/http';
import {
  CreatePortfolioTemplateRequest,
  CreatePortfolioTemplateResponse,
  GetPortfolioIntroRequest,
} from '@src/service/types/portfolio';

export class PortfolioService {
  constructor(private http: Http) {}

  async createPortfolioTemplate(data: CreatePortfolioTemplateRequest) {
    const { job } = data;
    const config: AxiosRequestConfig = {
      method: 'POST',
    };

    return this.http.fetchJson<CreatePortfolioTemplateResponse>(
      `/member/portfolio?job=${job}`,
      config
    );
  }

  async getPortfolioIntro(data: GetPortfolioIntroRequest) {}
}
