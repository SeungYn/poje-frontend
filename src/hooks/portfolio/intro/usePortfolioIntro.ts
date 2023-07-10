import { useSetRecoilState } from 'recoil';
import service from '@src/service';
import { PortfolioIntroType } from '@src/service/types/portfolio';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import { isModifyModeFromPortfolioIntro } from '@src/store/portfolio/modify';
import { queryKey } from '@src/react-query/queryKey';
import { CopiedPfIntroType } from './usePortfolioModifyForm';

export type UpdataIntroTData = PortfolioIntroType;
export type UpdataIntroTVariables = Pick<
  CopiedPfIntroType,
  'backgroundImgFile' | 'title' | 'description' | 'portfolioId'
>;

export default function usePortfolioIntro() {
  const queryClient = useQueryClient();
  const setModify = useSetRecoilState(isModifyModeFromPortfolioIntro);
  const { portfolioId } = usePortfolioInfo();

  //1. suspense 사용시 onSuccess에 setState를 등록하면 업데이트가 안됨 이유는 unmount상태에서 변경했기때문
  const { data, isFetching } = useQuery(
    [queryKey.portfolioIntro, portfolioId],
    async () => await service.portfolio.getPortfolioIntro({ portfolioId }),
    {
      suspense: true,
    }
  );

  const updateIntro = useMutation<
    UpdataIntroTData,
    unknown,
    UpdataIntroTVariables,
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
      onSuccess: (data) => {
        return queryClient.setQueryData(
          [queryKey.portfolioIntro, portfolioId],
          data
        );
      },
      onSettled: () => {
        setModify(false);
      },
    }
  );

  return {
    pfIntro: data!,
    updateIntro: updateIntro.mutate,
    isMutating: updateIntro.isLoading,
    isFetching,
  };
}
