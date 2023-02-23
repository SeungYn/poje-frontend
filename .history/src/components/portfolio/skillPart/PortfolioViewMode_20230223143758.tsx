import useSkills from '@src/hooks/portfolio/skills/useSkills';
import PortfolioSkills from './PortfolioSkills';

export default function PortfolioViewMode() {
  const { skills } = useSkills();
  const [isModifyMode, setIsModifyMode] = useRecoilState(
    isModifyModeFromSkills
  );
  return (
    <>
      <PortfolioSkills skillList={skills} />
    </>
  );
}
