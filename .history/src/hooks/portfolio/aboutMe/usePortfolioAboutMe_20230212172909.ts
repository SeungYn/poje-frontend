import service from '@src/service';
import { useQuery } from '@tanstack/react-query';

export default function usePortfolioAboutMe() {
  const { portfolioId } = usePortfolioInfo();
  const { data } = useQuery(
    'portfolioAboutMe',
    async () => await service.portfolio.getAboutMe({ portfolioId })
  );
  return 123;
}
