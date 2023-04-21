import { BasicResponse } from './basicResponse';

export interface CreatePortfolioTemplateRequest {
  job: string;
}

export interface CreatePortfolioTemplateResponse extends BasicResponse {
  result: { portfolioId: string };
}

export interface DeletePortfolioItemRequest {
  portfolioId: string;
}

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
  likeStatus: boolean;
  likeCount: boolean;
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

export interface PutIntroResponse extends BasicResponse {
  result: PortfolioIntroType;
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

export interface CreateProjectRequest {
  portfolioId: string;
}

export interface GetProjectRequest {
  portfolioId: string;
}

export type ProjectInfoType = {
  projectId: string;
  name: string;
  duration: string;
  description: string;
  belong: string;
  link: string;
};

export type ProjectAwardInfoType = {
  supervision: string;
  grade: string;
  description: string;
};

export type ProjectSkillType = Omit<SkillItemType, 'path'>;

export type ProjectSkillListType = {
  type: string;
  skills: ProjectSkillType[];
};

export type ProjectType = {
  prInfo: ProjectInfoType;
  prAwardInfo: ProjectAwardInfoType;
  prSkillList: ProjectSkillListType[];
  prImgList: string[];
};

export interface PutProjectRequest {
  projectId: string;
  prInfo: Omit<ProjectInfoType, 'portfolioId'>;
  prAwardInfo: ProjectAwardInfoType;
  prSkillList: ProjectSkillListType[];
  prImgList: File[];
  prImgDelList: string[];
}

export interface DeleteProjectRequest {
  projectId: string;
}

export interface ProjectResponse extends BasicResponse {
  result: ProjectType;
}

export interface ProjectsResponse extends BasicResponse {
  result: ProjectType[];
}

// 포트폴리오 좋아요
export type PortfolioLikeType = {
  likeStatus: boolean;
  likeCount: number;
};

export interface PortfolioLikeRequest {
  portfolioId: string;
}

export interface PortfolioLikeResponse extends BasicResponse {
  result: PortfolioLikeType;
}

// 수정모드 권한
export interface GetModifyPermissionRequest {
  portfolioId: string;
}

export interface GetModifyPermissionResponse extends BasicResponse {
  result: boolean;
}
