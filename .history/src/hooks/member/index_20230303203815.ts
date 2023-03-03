import service from '@src/service';
import { useQuery } from '@tanstack/react-query';

export const usePortfolioLists = (page: string) => {
  const { result } = useQuery(
    ['portfoliosListWithLike', page],
    () => service.job.getePortfolioCardsWithLike({ page }),
    { staleTime: 1000 * 60, suspense: true }
  );
};
