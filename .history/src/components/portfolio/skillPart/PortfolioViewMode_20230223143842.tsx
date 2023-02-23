import useSkills from '@src/hooks/portfolio/skills/useSkills';
import { isModifyModeFromSkills } from '@src/store/portfolio/modify';
import { useRecoilState } from 'recoil';
import ModifyBtn from '../common/ModifyBtn';
import PortfolioSkills from './PortfolioSkills';

export default function PortfolioViewMode() {
  const { skills } = useSkills();
  const [isModifyMode, setIsModifyMode] = useRecoilState(
    isModifyModeFromSkills
  );
  return (
    <>
      <PortfolioSkills skillList={skills} />
      <ModifyBtn
        isModifyMode={isModifyMode}
        handleModifyMode={() => setIsModifyMode(true)}
      />
    </>
  );
}
