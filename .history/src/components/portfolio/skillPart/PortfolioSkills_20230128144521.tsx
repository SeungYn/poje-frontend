import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import { SkillIconSetType } from '../../../util/skillicons';
import { front } from '../../svgs/Test1';
import PortfolioSkillItem from './PortfolioSkillItem';

const breakpointColumnsObj = Object.freeze({
  default: 6,
  1400: 5,
  1000: 4,
  700: 2,
  500: 1,
});

export type SkillListType = {
  type: string;
  skills: SkillIconSetType[];
};

export interface PortfolioSkillsType {
  skillList: SkillListType[];
}

export default function PortfolioSkills({ skillList }: PortfolioSkillsType) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='skillsContainer'
      columnClassName='skillsStack'
    >
      {/* {Object.keys(skills).map((title) => (
        <PortfolioSkillItem skillTitle={title} skillList={skills[title]} />
      ))} */}
      {skillList.map((skillSet) => (
        <PortfolioSkillItem
          skillType={skillSet.type}
          skillList={skillSet.skills}
        />
      ))}
    </Masonry>
  );
}
