import { BasicResponse } from './basicResponse';

export interface LikeRequest {}

export interface JobCategoryResponse extends BasicResponse {
  jobInfoRespList: { name: string }[];
}
