import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import service from '@src/service';
import { useQuery } from '@tanstack/react-query';

export default function usePortfolioLike() {
  const { portfolioId } = usePortfolioInfo();
  const { data } = useQuery(['portfolioLike', portfolioId], async () =>
    service.portfolio.getPortfolioLike({ portfolioId })
  );

  return { data };
}
