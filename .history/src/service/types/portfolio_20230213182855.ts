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

export interface ModifyAboutMeRequest extends Omit<AboutMeType, 'profileImg'> {
  portfolioId: string;
  profileImgFile: File | null;
}

// Skills
export type SkillItemType = {
  skillId?: number;
  name: string;
  path: string;
};

export type SkillsType = {
  type: string;
  skills: SkillItemType[];
};
export interface GetSkillsRequest {
  portfolioId: string;
}

export interface PutSkillsRequest {
  portfolioId: string;
  skillSet: SkillsType[] | [];
}

export interface SkillsResponse extends BasicResponse {
  result: SkillsType[];
}

// Project

export interface CreateProjectRequest{
  portfolioId : string;
}

export interface GetProjectRequest{
  portfolioId : string;
}

export type ProjectInfoType = {
  projectId: string;
  name: string;
  duration: string;
  description: string;
  belong: string;
  link: string;
}

export type ProjectAwardInfoType = {
  supervision: string;
  grade: string;
  description: string;
}

export type ProjectSkillType = Omit<SkillItemType, 'path'>;

export type ProjectType = {
  prInfo: ProjectInfoType;
  prAwardInfo : ProjectAwardInfoType;
  prSkillList: ProjectSkillType[];
  prImgList : string[]
}


export interface PutProjectRequest{
  projectId:string;
  prInfo: Omit<ProjectInfoType, 'portfolioId'>;
  prAwardInfo : ProjectAwardInfoType;
  prSkillList:ProjectSkillType[];
  prImgList:File[];
}

export interface ProjectResponse extends BasicResponse{
  result: ProjectType;
}

export interface ProjectsResponse extends BasicResponse{
  result:ProjectType[];
}