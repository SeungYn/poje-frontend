import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import service from '@src/service';
import {
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

  const update = useMutation<
    AboutMeType,
    unknown,
    ModifyAboutMeRequest,
    unknown
  >(async (data: ModifyAboutMeRequest) => {
    return await service.portfolio.putAboutMe({ ...data });
  }, {});
  return { aboutMe: data! };
}
