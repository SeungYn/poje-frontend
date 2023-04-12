import useSkills from '@src/hooks/portfolio/skills/useSkills';
import { isModifyModeFromSkills } from '@src/store/portfolio/modify';
import { useRecoilState } from 'recoil';
import ModifyBtn from '../common/ModifyBtn';
import PortfolioSkillItem from './PortfolioSkillItem';
import PortfolioSkillMasonry from './PortfolioSkillMasonry';
import uuid from 'react-uuid';

export default function PortfolioViewMode() {
  const { skills } = useSkills();
  const [isModifyMode, setIsModifyMode] = useRecoilState(
    isModifyModeFromSkills
  );
  return (
    <>
      <PortfolioSkillMasonry>
        {skills.map((skillSet) => <PortfolioSkillItem key={uuid()} skillType={skillSet.type} skillList={skillSet.skills} />)}
      </PortfolioSkillMasonry>
      <ModifyBtn
        isModifyMode={isModifyMode}
        handleModifyMode={() => setIsModifyMode(true)}
      />
    </>
  );
}
