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
    handleAddSkillToCopiedSkills: handleAddSkill,
    handleSkillFromCopiedSkills: handleSkillIconDelete,
  } = useSkillsModify();
  //const [modifySkillList, setModifySkillList] = useState([...skillList]);

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
