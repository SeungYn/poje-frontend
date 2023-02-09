import { JobPortfolioCardResponse } from '@src/service/types/jobCard';

export type PortfolioListItemType = Pick<
  Pick<JobPortfolioCardResponse, 'result'>['result'],
  'pfAndMemberResp'
>['pfAndMemberResp'];
export default function JobPortfolioList() {
  return <div></div>;
}
