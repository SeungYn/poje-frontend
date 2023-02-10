import service from '@src/service';
import { GetPortfolioIntroRequest } from '@src/service/types/portfolio';
import { useMutation, useQuery } from '@tanstack/react-query';
export default function useGetPortfolioIntro({
  portfolioId,
}: GetPortfolioIntroRequest) {
  //todo 인트로 보내기 가져오기
  const { data } = useQuery(
    ['portfolioIntro', portfolioId],
    () => service.portfolio.getPortfolioIntro({ portfolioId }),
    { suspense: true }
  )!;

  const updateIntro = useMutation<
    void,
    unknown,
    { title: string; description: string },
    unknown
  >((data) => {
    console.log(data);
    return Promise.resolve();
  }, {});

  return { updateIntro: updateIntro.mutate };
}
