import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import { SkillItemType, SkillsType } from '@src/service/types/portfolio';
import { SkillIconType } from '@src/util/skillicons';
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

  const handleAddSkillToCopiedSkills = ({
    item,
    selectedType,
  }: {
    item: SkillItemType;
    selectedType: SkillIconType;
  }) => {
    setCopiedSkills((list) => {
      const targetSetIndex = list.findIndex(
        (item) => item.type === selectedType
      );
      const targetSet = list.find((item) => item.type === selectedType);

      if (targetSet === undefined) {
        return [
          ...list,
          { type: selectedType, skills: [item] },
        ] as SkillsType[];
      }

      const willModifyTargetSet = { ...targetSet };
      const skillsFront = list.slice(0, targetSetIndex);
      const skillsBack = list.slice(targetSetIndex + 1);
      return [
        ...skillsFront,
        {
          ...willModifyTargetSet,
          skills: [...willModifyTargetSet.skills, item],
        },
        ...skillsBack,
      ];
    });
  };

  return { copiedSkills, setCopiedSkills, handleAddSkillToCopiedSkills };
}
