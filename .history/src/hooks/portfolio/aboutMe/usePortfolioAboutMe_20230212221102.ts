import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import service from '@src/service';
import {
  AboutMeResponse,
  AboutMeType,
  ModifyAboutMeRequest,
} from '@src/service/types/portfolio';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export default function usePortfolioAboutMe() {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const { portfolioId } = usePortfolioInfo();
  const { data } = useQuery(
    ['portfolioAboutMe', portfolioId],
    async () => await service.portfolio.getAboutMe({ portfolioId }),
    { suspense: true }
  );

  //mutation 안에서 업데이트 성공시 해당 쿼리키를 클라이언트에서 업데이트 시킴
  const updateAboutMe = useMutation<
    AboutMeResponse,
    unknown,
    ModifyAboutMeRequest,
    unknown
  >(
    async (data: ModifyAboutMeRequest) => {
      return await service.portfolio.putAboutMe({ ...data });
    },
    {
      onSuccess: (data) => {
        const { result } = data;
        queryClient.setQueryData(['portfolioAboutMe', portfolioId], result);
        setIsLoading(false);
      },
    }
  );
  return { aboutMe: data!, update: updateAboutMe.mutate, isLoading };
}
