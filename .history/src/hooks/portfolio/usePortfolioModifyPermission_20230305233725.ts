import service from '@src/service';
import { useQuery } from '@tanstack/react-query';

export default function usePortfolioModifyPermission(portfolioId: string) {
  const { data } = useQuery(
    ['portfolioPermission', portfolioId],
    async () =>
      await service.portfolio.getPortfolioModifyPermission({ portfolioId })
  );

  return data!;
}
