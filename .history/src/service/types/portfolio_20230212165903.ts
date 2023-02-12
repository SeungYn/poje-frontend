import { BasicResponse } from './basicResponse';

export interface CreatePortfolioTemplateRequest {
  job: string;
}

export interface CreatePortfolioTemplateResponse extends BasicResponse {}

//인트로 파트 타입

export interface GetPortfolioIntroRequest {
  portfolioId: string;
}

export type PortfolioIntroType = {
  portfolioId: string;
  title: string;
  description: string;
  backgroundImg: string;
  jobName: string;
};

export interface GetPortfolioIntroResponse extends BasicResponse {
  result: PortfolioIntroType;
}

// 인트로 수정
export interface ModifyPortfolioIntroRequest {
  img: File;
  title: string;
  description: string;
  portfolioId: string;
}

// AboutMe

export type AboutMeType = {
  nickName: string;
  email: string;
  phoneNum: string;
  gender: string;
  academic: string;
  dept: string;
  birth: string;
  profileImg: string;
  gitHubLink: string;
  blogLink: string;
};

export interface AboutMeRequest {
  portfolioId: string;
}

export interface AboutMeResponse extends BasicResponse {
  result: AboutMeType;
}

export interface ModifyAboutMeRequest extends AboutMeType {}
