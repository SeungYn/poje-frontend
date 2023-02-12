import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import service from '@src/service';
import {
  AboutMeResponse,
  AboutMeType,
  ModifyAboutMeRequest,
} from '@src/service/types/portfolio';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export default function usePortfolioAboutMe() {
  const queryClient = useQueryClient();
  const { portfolioId } = usePortfolioInfo();
  const { data } = useQuery(
    ['portfolioAboutMe', portfolioId],
    async () => await service.portfolio.getAboutMe({ portfolioId }),
    { suspense: true }
  );

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
        console.log('update!', data);
        queryClient.setQueryData(['portfolioAboutMe', portfolioId], data);
      },
    }
  );
  return { aboutMe: data!, update: updateAboutMe.mutate };
}
