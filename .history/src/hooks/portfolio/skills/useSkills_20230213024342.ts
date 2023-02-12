import { useRecoilState, useSetRecoilState } from 'recoil';
import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import service from '@src/service';
import {
  PutSkillsRequest,
  SkillsResponse,
  SkillsType,
} from '@src/service/types/portfolio';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { skillsLoading } from '@src/store/portfolio/loading';
import { isModifyModeFromSkills } from '@src/store/portfolio/modify';

export default function useSkills() {
  const [isLoading, setIsLoading] = useRecoilState(skillsLoading);
  const setModifyMode = useSetRecoilState(isModifyModeFromSkills);
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
      onMutate: () => setIsLoading(true),
      onSuccess: (skills) => {
        queryClient.setQueryData(['portfolioSkills', portfolioId], skills);
        setIsLoading(false);
        setModifyMode(false);
      },
    }
  );
  return { skills: data! };
}
