import service from '@src/service';
import { useQuery } from '@tanstack/react-query';

export default function usePortfolioLists({ jobName }: { jobName: string }) {
  const { data } = useQuery(['portfolios'], () =>
    service.job.getPortfolioCards({ name: jobName })
  );
}
