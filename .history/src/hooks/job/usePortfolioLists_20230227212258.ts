import service from '@src/service';
import { useQuery } from '@tanstack/react-query';

export default function usePortfolioLists({ jobName, page }: { jobName: string, page:string }) {
  const { data:{pfAndMemberResp,pagingUtil } } = useQuery(
    ['portfolios'],
    () => service.job.getPortfolioCards({ name: jobName ,page}),
    { suspense: true }
  );

  return  [];
}
