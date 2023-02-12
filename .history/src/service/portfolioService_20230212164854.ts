import { AxiosRequestConfig } from 'axios';
import Http from '@src/network/http';
import {
  CreatePortfolioTemplateRequest,
  CreatePortfolioTemplateResponse,
  GetPortfolioIntroRequest,
  GetPortfolioIntroResponse,
  ModifyPortfolioIntroRequest,
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

  async getPortfolioIntro(data: GetPortfolioIntroRequest) {
    const { portfolioId } = data;
    const config: AxiosRequestConfig = {
      method: 'GET',
    };
    const {
      data: { result },
    } = await this.http.fetchJson<GetPortfolioIntroResponse>(
      `/member/portfolio/${portfolioId}`,
      config
    );

    return result;
  }

  async modifyPortfolioIntro(data: ModifyPortfolioIntroRequest) {
    console.log(data);
    const { portfolioId, title, description, img } = data;
    const formData = new FormData();
    formData.append(
      'portfolioUpdateReq',
      new Blob([JSON.stringify({ title, description })], {
        type: 'application/json',
      })
    );
    formData.append('portfolioImg', img);

    const config: AxiosRequestConfig = {
      method: 'PUT',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    };
    const { data: result } = await this.http.fetchJson(
      `/member/portfolio/${portfolioId}`,
      config
    );
  }
}
