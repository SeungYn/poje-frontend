import useSkills from '@src/hooks/portfolio/skills/useSkills';
import PortfolioSkills from './PortfolioSkills';

export default function PortfolioViewMode() {
  const { skills } = useSkills();
  return (
    <>
      <PortfolioSkills skillList={skills} />
    </>
  );
}
