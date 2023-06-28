import { useSetRecoilState } from 'recoil';
import service from '@src/service';
import { PortfolioIntroType } from '@src/service/types/portfolio';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import { introLoading } from '@src/store/portfolio/loading';
import { isModifyModeFromPortfolioIntro } from '@src/store/portfolio/modify';
import { queryKey } from '@src/react-query/queryKey';
import { CopiedPfIntroType } from './usePortfolioModifyForm';

export default function usePortfolioIntro() {
  const queryClient = useQueryClient();
  const setIsLoading = useSetRecoilState(introLoading);
  const setModify = useSetRecoilState(isModifyModeFromPortfolioIntro);
  const { portfolioId } = usePortfolioInfo();
  //todo 인트로 보내기 가져오기

  //1. suspense 사용시 onSuccess에 setState를 등록하면 업데이트가 안됨 이유는 unmount상태에서 변경했기때문
  const { data } = useQuery(
    [queryKey.portfolioIntro, portfolioId],
    async () => await service.portfolio.getPortfolioIntro({ portfolioId }),
    {
      suspense: true,
    }
  );

  const updateIntro = useMutation<
    PortfolioIntroType,
    unknown,
    Pick<
      CopiedPfIntroType,
      'backgroundImgFile' | 'title' | 'description' | 'portfolioId'
    >,
    unknown
  >(
    ({ title, description, backgroundImgFile, portfolioId }) => {
      return service.portfolio.modifyPortfolioIntro({
        title,
        description,
        img: backgroundImgFile!,
        portfolioId,
      });
    },
    {
      onMutate: () => {
        setIsLoading(true);
        //queryClient.invalidateQueries(['portfolioIntro', portfolioId]);
      },
      onSuccess: (data) => {
        queryClient.setQueryData([queryKey.portfolioIntro, portfolioId], data);
      },
      onSettled: () => {
        setIsLoading(false);
        setModify(false);
      },
    }
  );

  return {
    pfIntro: data!,
    updateIntro: updateIntro.mutate,
  };
}
