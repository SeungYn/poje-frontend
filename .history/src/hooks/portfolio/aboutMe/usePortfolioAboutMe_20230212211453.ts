import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import service from '@src/service';
import { useQuery } from '@tanstack/react-query';

export default function usePortfolioAboutMe() {
  const { portfolioId } = usePortfolioInfo();
  const { data } = useQuery(
    ['portfolioAboutMe', portfolioId],
    async () => await service.portfolio.getAboutMe({ portfolioId }),
    { suspense: true }
  );
  return { aboutMe: data! };
}
