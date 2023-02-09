import { BasicResponse } from './basicResponse';

export interface LikeRequest {
  portfolioId: number;
}

export interface LikeResponse extends BasicResponse {
  result: {
    likeStatus: boolean;
    likeCount: 1;
  };
}

export interface JobCategoryResponse extends BasicResponse {
  jobInfoRespList: { name: string }[];
}
