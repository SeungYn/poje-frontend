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
  page: string;
}

export interface JobCategoryResponse extends BasicResponse {
  result: { jobInfoRespList: { name: string }[] };
}

export type PortfoliosPagInfoType = {
  totalRecordCnt:number;    // 전체 데이터 수
  totalPageCnt:number;      // 전체 페이지 수
  startPage:number;         // 첫 페이지 번호
  endPage:number;           // 끝 페이지 번호
  prev:boolean;             // 이전 페이지 표시 여부
  next:boolean; 
}

export interface JobPortfolioCardResponse extends BasicResponse {
  result: {
    pfAndMemberResp: PortfolioItemType[],
    pagingUtil: PortfoliosPagInfoType,
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

export interface GetPortfoliosPagInfoRequest{
  name: string;
  page: string;
}



export interface GetPortfoliosPagInfoResponse extends BasicResponse{
  result: PortfoliosPagInfoType;  
}