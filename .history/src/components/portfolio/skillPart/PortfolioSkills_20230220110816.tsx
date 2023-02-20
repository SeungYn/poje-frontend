import { SkillsType } from '@src/service/types/portfolio';
import Masonry from 'react-masonry-css';
import uuid from 'react-uuid';
import PortfolioSkillItem from './PortfolioSkillItem';

const breakpointColumnsObj = Object.freeze({
  default: 6,
  1400: 5,
  1000: 4,
  700: 2,
  500: 1,
});

export interface PortfolioSkillsType {
  skillList: SkillsType[];
  handleSkillIconDelete?: (type: string, name: string) => void;
}

export default function PortfolioSkills({
  skillList,
  handleSkillIconDelete,
}: PortfolioSkillsType) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='skillsContainer'
      columnClassName='skillsStack'
    >
      {skillList.map((skillSet) => (
        <PortfolioSkillItem
          key={uuid()}
          skillType={skillSet.type}
          skillList={skillSet.skills}
          onDelete={handleSkillIconDelete}
        />
      ))}
    </Masonry>
  );
}
