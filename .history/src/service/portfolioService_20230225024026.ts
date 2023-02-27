import { AxiosRequestConfig } from 'axios';
import Http from '@src/network/http';
import {
  AboutMeRequest,
  AboutMeResponse,
  AboutMeType,
  CreatePortfolioTemplateRequest,
  CreatePortfolioTemplateResponse,
  CreateProjectRequest,
  DeleteProjectRequest,
  GetModifyPermissionRequest,
  GetModifyPermissionResponse,
  GetPortfolioIntroRequest,
  GetPortfolioIntroResponse,
  GetPortfolioLikeRequest,
  GetProjectRequest,
  GetSkillsRequest,
  ModifyAboutMeRequest,
  ModifyPortfolioIntroRequest,
  ProjectResponse,
  ProjectsResponse,
  PutIntroResponse,
  PutProjectRequest,
  PutSkillsRequest,
  SkillsResponse,
  SkillsType,
} from '@src/service/types/portfolio';
import { BasicResponse } from './types/basicResponse';

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
    const {
      data: { result },
    } = await this.http.fetchJson<PutIntroResponse>(
      `/member/portfolio/${portfolioId}`,
      config
    );

    return result;
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

    return result;
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

    return result;
  }

  //Skills
  async getSkills(data: GetSkillsRequest) {
    const { portfolioId } = data;
    const config: AxiosRequestConfig = {
      method: 'GET',
    };
    const {
      data: { result },
    } = await this.http.fetchJson<SkillsResponse>(
      `/member/portfolio/${portfolioId}/skills`,
      config
    );
    return result;
  }

  async putSkills(data: PutSkillsRequest) {
    const { portfolioId, skillSet } = data;
    const config: AxiosRequestConfig = {
      method: 'PUT',
      data: { skillSet },
    };

    const {
      data: { result },
    } = await this.http.fetchJson<SkillsResponse>(
      `/member/portfolio/${portfolioId}/skill`,
      config
    );

    return result;
  }

  // Project
  async createProject(data: CreateProjectRequest) {
    const { portfolioId } = data;
    const config: AxiosRequestConfig = {
      method: 'POST',
    };

    const {
      data: { result },
    } = await this.http.fetchJson<ProjectResponse>(
      `/member/portfolio/${portfolioId}/project`,
      config
    );
    return result;
  }

  async getProjects(data: GetProjectRequest) {
    const { portfolioId } = data;
    const config: AxiosRequestConfig = {
      method: 'GET',
    };
    const {
      data: { result },
    } = await this.http.fetchJson<ProjectsResponse>(
      `/member/portfolio/${portfolioId}/projects`,
      config
    );
    return result;
  }

  async putProject(data: PutProjectRequest) {
    const {
      projectId,
      prInfo,
      prAwardInfo,
      prSkillList,
      prImgList,
      prImgDelList,
    } = data;
    console.log(data);
    const formData = new FormData();
    formData.append(
      'projectUpdateReq',
      new Blob(
        [
          JSON.stringify({
            prInfo,
            prAwardInfo,
            skillSet: prSkillList,
          }),
        ],
        { type: 'application/json' }
      )
    );
    if (prImgList.length > 0) {
      for (let file of prImgList) {
        formData.append('projectImg', file);
      }
    }

    if (prImgDelList.length > 0)
      formData.append(
        'prImgDelList',
        new Blob([JSON.stringify({ prImgDelList })], {
          type: 'application/json',
        })
      );

    const entries = formData.entries();
    for (const k of entries) {
      console.log(k[0], k[1]);
    }
    const config: AxiosRequestConfig = {
      method: 'PUT',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    const { data: result } = await this.http.fetchJson<BasicResponse>(
      `/member/project/${projectId}`,
      config
    );
  }

  async deleteProject(data: DeleteProjectRequest) {
    const { projectId } = data;

    const config: AxiosRequestConfig = {
      method: 'DELETE',
    };

    const { data: result } = await this.http.fetchJson<BasicResponse>(
      `/member/project/${projectId}`,
      config
    );
  }

  async getPortfolioLike(data: GetPortfolioLikeRequest) {
    const { portfolioId } = data;

    const config: AxiosRequestConfig = {
      method: 'GET',
    };
  }

  async getPortfolioModifyPermission(data: GetModifyPermissionRequest) {
    const { portfolioId } = data;
    const config: AxiosRequestConfig = {
      method: 'GET',
    };
    const {
      data: { result },
    } = await this.http.fetchJson<GetModifyPermissionResponse>(
      `/member/portfolio/${portfolioId}/permission`,
      config
    );
    return result;
  }
}
