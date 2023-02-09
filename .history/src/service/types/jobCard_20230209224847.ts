import { BasicResponse } from './basicResponse';

export interface LikeRequest {
  portfolioId: number;
}

export interface LikeResponse extends BasicResponse {
  result: {
    likeStatus: boolean;
    likeCount: number;
  };
}

export interface JobPortfolioCardRequest {
  name: string;
}

export interface JobCategoryResponse extends BasicResponse {
  result: { jobInfoRespList: { name: string }[] };
}

export interface JobPortfolioCardResponse extends BasicResponse {
  result: {
    pfAndMemberResp: PortfolioItemType[];
  };
}

export type PortfolioItemType = {
  portfolioId: number;
  title: string;
  description: string;
  backgroundImg: string;
  nickName: string;
  profileImg: string;
  likeCount: number;
};
