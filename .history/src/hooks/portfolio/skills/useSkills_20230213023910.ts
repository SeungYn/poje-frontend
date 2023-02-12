import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import service from '@src/service';
import { PutSkillsRequest, SkillsResponse } from '@src/service/types/portfolio';
import { useMutation, useQuery } from '@tanstack/react-query';

export default function useSkills() {
  const { portfolioId } = usePortfolioInfo();
  const { data } = useQuery(
    ['portfolioSkills', portfolioId],
    () => service.portfolio.getSkills({ portfolioId }),
    { suspense: true }
  );

  const updateSkills = useMutation<
    SkillsResponse,
    unknown,
    PutSkillsRequest,
    unknown
  >(async (data) => await service.portfolio.putSkills(data), {
    onSuccess: () => {},
  });
  return { skills: data! };
}
