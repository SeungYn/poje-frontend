import { AxiosRequestConfig } from 'axios';
import Http from '@src/network/http';
import {
  createPortfolioTemplateRequest,
  createPortfolioTemplateResponse,
} from '@src/service/types/portfolio';

export class PortfolioService {
  constructor(private http: Http) {}

  async createPortfolioTemplate(data: createPortfolioTemplateRequest) {
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
