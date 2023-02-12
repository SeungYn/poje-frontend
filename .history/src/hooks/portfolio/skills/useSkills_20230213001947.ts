import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import { useQuery } from '@tanstack/react-query';

export default function useSkills() {
  const { portfolioId } = usePortfolioInfo();
  //const {data} = useQuery(['portfolioSkills', portfolioId], ()=>)
  return 1;
}
