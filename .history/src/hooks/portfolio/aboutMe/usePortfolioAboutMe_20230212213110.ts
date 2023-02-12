import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import service from '@src/service';
import {
  AboutMeResponse,
  AboutMeType,
  ModifyAboutMeRequest,
} from '@src/service/types/portfolio';
import { useMutation, useQuery } from '@tanstack/react-query';

export default function usePortfolioAboutMe() {
  const { portfolioId } = usePortfolioInfo();
  const { data } = useQuery(
    ['portfolioAboutMe', portfolioId],
    async () => await service.portfolio.getAboutMe({ portfolioId }),
    { suspense: true }
  );

  const updateAboutMe = useMutation<
    AboutMeResponse,
    unknown,
    AboutMeType,
    unknown
  >(
    async (data) => {
      return await service.portfolio.putAboutMe({ ...data });
    },
    {
      onSuccess: (data) => {
        console.log('update!', data);
      },
    }
  );
  return { aboutMe: data!, update: updateAboutMe.mutate };
}
