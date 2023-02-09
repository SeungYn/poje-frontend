import service from '@src/service';
import { useQuery } from '@tanstack/react-query';

export default function usePortfolioLists() {
  const {} = useQuery(['portfolios'], () => service.job.getPortfolioCards());
}
