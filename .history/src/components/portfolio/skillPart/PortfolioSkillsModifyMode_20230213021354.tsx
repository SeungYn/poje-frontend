import { useState } from 'react';
import { SkillIconSetType, SkillIconType } from '../../../util/skillicons';
import PortfolioSkillAddPalette from './PortfolioSkillAddPalette';
import { SkillListType } from './PortfolioSkillsContainer';
import PortfolioSkills from './PortfolioSkills';
import useSkillsModify from '@src/hooks/portfolio/skills/useSkillsModify';
import { SkillItemType, SkillsType } from '@src/service/types/portfolio';

interface PortfolioSkillsModifyModeType {
  skillList: SkillListType[];
  //toggleModify: () => void;
}

export default function PortfolioSkillsModifyMode({
  skillList,
}: PortfolioSkillsModifyModeType) {
  const {
    copiedSkills: modifySkillList,
    setCopiedSkills: setModifySkillList,
    handleAddSkill,
  } = useSkillsModify();
  //const [modifySkillList, setModifySkillList] = useState([...skillList]);

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
        skillList={modifySkillList}
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
