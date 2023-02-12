import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import service from '@src/service';
import { useQuery } from '@tanstack/react-query';

export default function useSkills() {
  const { portfolioId } = usePortfolioInfo();
  const { data } = useQuery(
    ['portfolioSkills', portfolioId],
    () => service.portfolio.getSkills({ portfolioId }),
    { suspense: true }
  );
  return { skills: data! };
}
