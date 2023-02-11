import service from '@src/service';
import {
  GetPortfolioIntroRequest,
  PortfolioIntroType,
} from '@src/service/types/portfolio';
import { useMutation, useQuery } from '@tanstack/react-query';
import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import { useState } from 'react';

type CopiedPfIntroType = PortfolioIntroType & {
  backgroundImgFile: File | null;
};

export default function usePortfolioIntro() {
  const [copiedPfIntro, setCopiedPfIntro] = useState<CopiedPfIntroType>({
    title: '',
    description: '',
    portfolioId: '',
    jobName: '',
    backgroundImg: '',
    backgroundImgFile: null,
  });

  const { portfolioId } = usePortfolioInfo();
  //todo 인트로 보내기 가져오기
  const { data } = useQuery(
    ['portfolioIntro', portfolioId],
    async () => await service.portfolio.getPortfolioIntro({ portfolioId }),
    {
      suspense: true,
      onSuccess(data) {
        console.log('onSuccess');
        setCopiedPfIntro((e) => ({ ...data, backgroundImgFile: null }));
      },
    }
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

  return {
    pfIntro: data!,
    updateIntro: updateIntro.mutate,
    copiedPfIntro,
    setCopiedPfIntro,
  };
}
