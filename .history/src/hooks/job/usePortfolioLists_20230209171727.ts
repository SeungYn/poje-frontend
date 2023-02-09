import service from '@src/service';
import { useQuery } from '@tanstack/react-query';

export default function usePortfolioLists({ jobName }: { jobName: string }) {
  const { data: jobList } = useQuery(
    ['portfolios'],
    () => service.job.getPortfolioCards({ name: jobName }),
    { suspense: true }
  );

  return { jobList };
}
