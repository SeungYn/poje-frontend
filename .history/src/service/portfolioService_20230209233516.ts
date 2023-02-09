import { AxiosRequestConfig } from 'axios';
import Http from '@src/network/http';
import {
  createPortfolioTemplate,
  createPortfolioTemplateResponse,
} from '@src/service/types/portfolio';
import { JobPortfolioCardResponse } from '@src/service/types/jobCard';

export class PortfolioService {
  constructor(private http: Http) {}

  async createPortfolioTemplate(data: createPortfolioTemplate) {
    const { job } = data;
    const config: AxiosRequestConfig = {
      method: 'POST',
    };

    return this.http.fetchJson<createPortfolioTemplateResponse>(
      `/member/portfolio?job=${job}`,
      config
    );
  }
}
