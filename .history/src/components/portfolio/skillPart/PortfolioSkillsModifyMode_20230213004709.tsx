import { useState } from 'react';
import { SkillIconSetType, SkillIconType } from '../../../util/skillicons';
import PortfolioSkillAddPalette from './PortfolioSkillAddPalette';
import { SkillListType } from './PortfolioSkillsContainer';
import PortfolioSkills from './PortfolioSkills';

interface PortfolioSkillsModifyModeType {
  skillList: SkillListType[];
  //toggleModify: () => void;
}

export default function PortfolioSkillsModifyMode({
  skillList,
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

  const handleSkillIconDelete = (type: string, name: string) => {
    console.log(123);
    setModifySkillList((list) => {
      const targetSkillSet = list.find((skill) => skill.type === type)!;
      const deletedTargetSkillSet = targetSkillSet.skills.filter(
        (skill) => skill.name !== name
      );
      const newSkillList = list.filter((item) => item.type !== type);

      return [
        ...newSkillList,
        { ...targetSkillSet, skills: [...deletedTargetSkillSet] },
      ];
    });
  };

  return (
    <>
      <PortfolioSkills
        // skillList={modifySkillList}
        handleSkillIconDelete={handleSkillIconDelete}
      />
      <PortfolioSkillAddPalette
        onModifyMode={() => {}}
        handleAddSkill={handleAddSkill}
        modifySkillList={modifySkillList}
      />
    </>
  );
}
