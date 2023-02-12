import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import { useQueryClient } from '@tanstack/react-query';

export default function useAboutMeModifyForm() {
  const { portfolioId } = usePortfolioInfo();
  const queryClient = useQueryClient();
  const a = queryClient.getQueryData(['portfolioAboutMe', portfolioId]);
  console.log(a);
  return 1;
}
