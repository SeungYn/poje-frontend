import { BasicResponse } from './basicResponse';

export interface CreatePortfolioTemplateRequest {
  job: string;
}

export interface CreatePortfolioTemplateResponse extends BasicResponse {}

export interface GetPortfolioIntroRequest {
  portfolioId: number;
}

export type PortfolioIntroType = {
  portfolioId: numberg;
        title: stringg;
        description: stringg;
        backgroundImg: stringg;
        jobName: string;
}

export interface GetPortfolioIntroResponse extends BasicResponse{
  result:
}
