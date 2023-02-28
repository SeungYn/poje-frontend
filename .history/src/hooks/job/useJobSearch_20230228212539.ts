import service from '@src/service';
import { useQuery } from '@tanstack/react-query';

export default function useJobSearch({ jobName, page, keyword }: { jobName: string; page: string; keyword: string }) {
  const { data } = useQuery(['portfoliosList', jobName, keyword, page], () => service.job.getPortfolioCardsWithKeyword({ name: jobName, page, keyword }), { staleTime: 1000 * 60 , suspense:true});
 
  return { pageingUtil: data!.paging, pfAndMemberResp:data!.pfAndMemberResp};
}
