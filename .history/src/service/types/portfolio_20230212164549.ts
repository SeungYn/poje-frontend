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

export interface AboutMeRequest {
  portfolioId: string;
}

export interface AboutMeResponse extends BasicResponse {
  nickName: '싸르';
  email: 'abc@123.com';
  phoneNum: '01011111111';
  gender: 'MALE';
  academic: null;
  dept: null;
  birth: '1998/10/13';
  profileImg: 'C:/Users/명수/Documents/공부/스프링/포제/profile/default_profile.PNG';
  gitHubLink: null;
  blogLink: null;
}
