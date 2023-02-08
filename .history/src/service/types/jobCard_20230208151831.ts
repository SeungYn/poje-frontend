import { BasicResponse } from './basicResponse';

export interface LikeRequest {
  portfolioId: number;
}

export interface JobCategoryResponse extends BasicResponse {
  jobInfoRespList: { name: string }[];
}
