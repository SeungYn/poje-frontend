import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import service from '@src/service';
import {
  PutSkillsRequest,
  SkillsResponse,
  SkillsType,
} from '@src/service/types/portfolio';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export default function useSkills() {
  const queryClient = useQueryClient();
  const { portfolioId } = usePortfolioInfo();
  const { data } = useQuery(
    ['portfolioSkills', portfolioId],
    () => service.portfolio.getSkills({ portfolioId }),
    { suspense: true }
  );

  const updateSkills = useMutation<
    SkillsType[],
    unknown,
    PutSkillsRequest,
    unknown
  >(
    async (data) => {
      return await service.portfolio.putSkills(data);
    },
    {
      onSuccess: (skills) => {
        queryClient.setQueryData(['portfolioSkills', portfolioId], skills);
      },
    }
  );
  return { skills: data! };
}
