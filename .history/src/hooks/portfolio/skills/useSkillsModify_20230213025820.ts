import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import { SkillItemType, SkillsType } from '@src/service/types/portfolio';
import { SkillIconType } from '@src/util/skillicons';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import useSkills from './useSkills';

export default function useSkillsModify() {
  const queryClient = useQueryClient();
  const { portfolioId } = usePortfolioInfo();
  const [copiedSkills, setCopiedSkills] = useState<SkillsType[]>([
    ...queryClient.getQueryData<SkillsType[]>([
      'portfolioSkills',
      portfolioId,
    ])!,
  ]);
  const { updateSkills } = useSkills();

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

  const handleSkillFromCopiedSkills = (type: string, skillName: string) => {
    console.log(123);
    setCopiedSkills((list) => {
      const targetSetIndex = list.findIndex((skill) => skill.type === type);
      const targetSkillSet = list.find((skill) => skill.type === type)!;
      const deletedTargetSkillList = targetSkillSet.skills.filter(
        (skill) => skill.name !== skillName
      );
      const newSkillList = list.filter((item) => item.type !== type);

      //제거된 스킬 리스트가 0개라면 항목에서 통째로 제거
      if (deletedTargetSkillList.length === 0) {
        return [...newSkillList];
      }

      const skillsFront = list.slice(0, targetSetIndex);
      const skillsBack = list.slice(targetSetIndex + 1);

      return [
        ...skillsFront,
        { ...targetSkillSet, skills: [...deletedTargetSkillList] },
        ...skillsBack,
      ];
    });
  };

  const handleSubmit = () => {
    updateSkills({ portfolioId, skillSet: copiedSkills });
  };

  return {
    copiedSkills,
    setCopiedSkills,
    handleAddSkillToCopiedSkills,
    handleSkillFromCopiedSkills,
    handleSubmit,
  };
}
