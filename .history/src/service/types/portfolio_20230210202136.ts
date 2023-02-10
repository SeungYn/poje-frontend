import { BasicResponse } from './basicResponse';

export interface CreatePortfolioTemplateRequest {
  job: string;
}

export interface CreatePortfolioTemplateResponse extends BasicResponse {}

export interface GetPortfolioIntroRequest {
  portfolioId: number;
}

export type PortfolioIntroType = {
  portfolioId: number;
        title: string;
        description: string;
        backgroundImg: string;
        jobName: strin;
}

export interface GetPortfolioIntroResponse extends BasicResponse{
  result:
}
