import { AxiosRequestConfig } from 'axios';
import Http from '@src/network/http';
import {
  AboutMeRequest,
  AboutMeResponse,
  CreatePortfolioTemplateRequest,
  CreatePortfolioTemplateResponse,
  GetPortfolioIntroRequest,
  GetPortfolioIntroResponse,
  ModifyAboutMeRequest,
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

  //AboutMe
  async getAboutMe(data: AboutMeRequest) {
    const { portfolioId } = data;
    const config: AxiosRequestConfig = {
      method: 'GET',
    };
    const {
      data: { result },
    } = await this.http.fetchJson<AboutMeResponse>(`/member`, config);
  }

  async putAboutMe(data: ModifyAboutMeRequest) {
    const {
      portfolioId,
      email,
      nickName,
      phoneNum,
      gender,
      academic,
      dept,
      birth,
      gitHubLink,
      blogLink,
      profileImgFile,
    } = data;

    const formData = new FormData();
    formData.append(
      'memberUpdateReq',
      new Blob(
        [
          JSON.stringify({
            portfolioId,
            email,
            nickName,
            phoneNum,
            gender,
            academic,
            dept,
            birth,
            gitHubLink,
            blogLink,
          }),
        ],
        { type: 'application/json' }
      )
    );
    if (profileImgFile) {
      formData.append('profileImg', profileImgFile);
    }

    const config: AxiosRequestConfig = {
      method: 'put',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    const { data: result } = await this.http.fetchJson<AboutMeResponse>(
      '/member',
      config
    );
  }
}
