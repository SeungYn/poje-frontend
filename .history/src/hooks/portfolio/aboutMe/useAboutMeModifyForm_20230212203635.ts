import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import { AboutMeType } from '@src/service/types/portfolio';
import { useQueryClient } from '@tanstack/react-query';

export default function useAboutMeModifyForm() {
  const { portfolioId } = usePortfolioInfo();
  const queryClient = useQueryClient();
  const a = queryClient.getQueryData<AboutMeType>([
    'portfolioAboutMe',
    portfolioId,
  ]);
  console.log(a);
  return 1;
}
