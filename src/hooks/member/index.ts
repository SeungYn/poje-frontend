import service from '@src/service';
import { useQuery } from '@tanstack/react-query';

export const usePortfolioListsByLike = (page: string) => {
  const { data } = useQuery(
    ['portfoliosListWithLike', page],
    () => service.job.getePortfolioCardsWithLike({ page }),
    { staleTime: 1000 * 60, suspense: true }
  );

  return { pageingUtil: data!.paging, pfAndMemberResp: data!.pfAndMemberResp };
};
