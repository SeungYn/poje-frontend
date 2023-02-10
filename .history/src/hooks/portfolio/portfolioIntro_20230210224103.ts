import service from '@src/service';
import {
  GetPortfolioIntroRequest,
  PortfolioIntroType,
} from '@src/service/types/portfolio';
import { useMutation, useQuery } from '@tanstack/react-query';
import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
export default function useGetPortfolioIntro({
  portfolioId,
}: GetPortfolioIntroRequest) {
  const { portfolioId } = usePortfolioInfo();
  //todo 인트로 보내기 가져오기
  const { data } = useQuery(
    ['portfolioIntro', portfolioId],
    async () => await service.portfolio.getPortfolioIntro({ portfolioId }),
    { suspense: true }
  );

  const updateIntro = useMutation<
    void,
    unknown,
    { title: string; description: string },
    unknown
  >((data) => {
    console.log(data);
    return Promise.resolve();
  }, {});

  return { pfIntro: data!, updateIntro: updateIntro.mutate };
}
