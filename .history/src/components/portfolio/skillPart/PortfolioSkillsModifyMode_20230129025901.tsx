import { useState } from 'react';
import { SkillIconSetType, SkillIconType } from '../../../util/skillicons';
import PortfolioSkillAddPalette from './PortfolioSkillAddPalette';
import PortfolioSkills, { SkillListType } from './PortfolioSkills';

interface PortfolioSkillsModifyModeType {
  skillList: SkillListType[];
  toggleModify: () => void;
}

export default function PortfolioSkillsModifyMode({
  skillList,
  toggleModify,
}: PortfolioSkillsModifyModeType) {
  const [modifySkillList, setModifySkillList] = useState([...skillList]);

  const handleAddSkill = ({
    item,
    selectedType,
  }: {
    item: SkillIconSetType;
    selectedType: SkillIconType;
  }) => {
    setModifySkillList((list) => {
      const targetTypeSet = list.find((item) => item.type === selectedType);
      if (targetTypeSet === undefined) {
        return [
          ...list,
          { type: selectedType, skills: [item] },
        ] as SkillListType[];
      }
      const willModifyTargetSet = { ...targetTypeSet };
      const newSkills = list.filter((set) => set.type !== selectedType);
      return [
        ...newSkills,
        {
          ...willModifyTargetSet,
          skills: [...willModifyTargetSet.skills, item],
        },
      ];
    });
  };
  return (
    <>
      <PortfolioSkills skillList={modifySkillList} />
      <PortfolioSkillAddPalette
        onModifyMode={toggleModify}
        handleAddSkill={handleAddSkill}
        modifySkillList={modifySkillList}
      />
    </>
  );
}
