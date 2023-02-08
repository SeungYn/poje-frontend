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
  jobInfoRespList: { name: string }[];
}

export interface JobPortfolioCardResponse extends BasicResponse {
  result: {
    pfAndMemberResp: {
      portfolioId: number;
      title: string;
    };
  };
}
