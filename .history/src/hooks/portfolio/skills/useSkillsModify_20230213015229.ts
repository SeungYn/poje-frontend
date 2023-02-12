import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import { SkillsType } from '@src/service/types/portfolio';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export default function useSkillsModify() {
  const queryClient = useQueryClient();
  const { portfolioId } = usePortfolioInfo();
  const [copiedSkills, setCopiedSkills] = useState<SkillsType[]>([
    ...queryClient.getQueryData<SkillsType[]>([
      'portfolioSkills',
      portfolioId,
    ])!,
  ]);

  return { copiedSkills, setCopiedSkills };
}
