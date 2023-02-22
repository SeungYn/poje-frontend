import service from '@src/service';
import { PortfolioIntroType } from '@src/service/types/portfolio';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import { useEffect, useState } from 'react';

type CopiedPfIntroType = PortfolioIntroType & {
  backgroundImgFile: File | null;
};

export default function usePortfolioIntro() {
  const queryClient = useQueryClient();
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

  //1. suspense 사용시 onSuccess에 setState를 등록하면 업데이트가 안됨 이유는 unmount상태에서 변경했기때문
  const { data, isFetching } = useQuery(
    ['portfolioIntro', portfolioId],
    async () => await service.portfolio.getPortfolioIntro({ portfolioId }),
    {
      suspense: true,
    }
  );

  const updateIntro = useMutation<
    void,
    unknown,
    Pick<
      CopiedPfIntroType,
      'backgroundImgFile' | 'title' | 'description' | 'portfolioId'
    >,
    unknown
  >(
    ({ title, description, backgroundImgFile, portfolioId }) => {
      console.log(title, description, backgroundImgFile);
      return service.portfolio.modifyPortfolioIntro({
        title,
        description,
        img: backgroundImgFile!,
        portfolioId,
      });
    },
    {
      onMutate: () => {
        //queryClient.invalidateQueries(['portfolioIntro', portfolioId]);
      },
      onSuccess: () => {
        console.log('success에서 실행');
        return queryClient.invalidateQueries(['portfolioIntro', portfolioId]);
      },
    }
  );

  //1에 대한 해결법으로 useEffect를 걸어놓으면 됨 , 결과의 데이터를 기준으로
  useEffect(() => {
    data && setCopiedPfIntro((e) => ({ ...data, backgroundImgFile: null }));
  }, [data]);

  return {
    pfIntro: data!,
    updateIntro: updateIntro.mutate,
    copiedPfIntro,
    setCopiedPfIntro,

    isFetching,
  };
}
