import useSkills from '@src/hooks/portfolio/skills/useSkills';
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import Masonry from 'react-masonry-css';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { SkillIconSetType, SkillIconType } from '../../../util/skillicons';
import PortfolioSkillItem from './PortfolioSkillItem';
import { SkillListType } from './PortfolioSkillsContainer';

const breakpointColumnsObj = Object.freeze({
  default: 6,
  1400: 5,
  1000: 4,
  700: 2,
  500: 1,
});

export interface PortfolioSkillsType {
  skillList: SkillListType[];
  setModifySkillList?: Dispatch<SetStateAction<SkillListType[]>>;
  handleSkillIconDelete?: (type: string, name: string) => void;
}

export default function PortfolioSkills({
  skillList,
  setModifySkillList,
  handleSkillIconDelete,
}: PortfolioSkillsType) {
  const { skills } = useSkills();
  console.log(skills);
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='skillsContainer'
      columnClassName='skillsStack'
    >
      {skills.map((skillSet) => (
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
