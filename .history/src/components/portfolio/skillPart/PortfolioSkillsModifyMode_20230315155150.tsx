import PortfolioSkillAddPalette from './PortfolioSkillAddPalette';
import PortfolioSkills from './PortfolioSkills';
import useSkillsModify from '@src/hooks/portfolio/skills/useSkillsModify';
import ModifyComfirmAndCancleGroup from '../common/ModifyComfirmAndCancleGroup';
import { useRecoilState } from 'recoil';
import { isModifyModeFromSkills } from '@src/store/portfolio/modify';
import LoadingSpiner from '../common/LoadingSpiner';
import PortfolioSkillMasonry from './PortfolioSkillMasonry';
import PortfolioSkillItem from './PortfolioSkillItem';
import uuid from 'react-uuid';

export default function PortfolioSkillsModifyMode() {
  const {
    copiedSkills: modifySkillList,
    handleAddSkillToCopiedSkills: handleAddSkill,
    handleRemoveSkillFromCopiedSkills: handleSkillIconDelete,
    handleSubmit,
    isLoading,
  } = useSkillsModify();
  const [isModifyMode, setIsModifyMode] = useRecoilState(
    isModifyModeFromSkills
  );

  if (isLoading) return <LoadingSpiner text='로딩중' />;

  return (
    <>
     
      <PortfolioSkillMasonry>
      {modifySkillList.map((skillSet) => <PortfolioSkillItem key={uuid()} skillType={skillSet.type} skillList={skillSet.skills}  onDelete={handleSkillIconDelete}/>)}
      </PortfolioSkillMasonry>
      <PortfolioSkillAddPalette
        onModifyMode={() => {
          setIsModifyMode(false);
        }}
        handleAddSkill={handleAddSkill}
        modifySkillList={modifySkillList}
      />
      <ModifyComfirmAndCancleGroup
        isModifyMode={isModifyMode}
        setIsModifyMode={setIsModifyMode}
        handleSubmit={() => {
          handleSubmit();
        }}
      />
    </>
  );
}
