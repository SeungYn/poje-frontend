import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import { SkillIconSetType, SkillIconType } from '../../../util/skillicons';
import PortfolioSkillItem from './PortfolioSkillItem';

const breakpointColumnsObj = Object.freeze({
  default: 6,
  1400: 5,
  1000: 4,
  700: 2,
  500: 1,
});

export type SkillListType = {
  type: SkillIconType;
  skills: SkillIconSetType[];
};

export interface PortfolioSkillsType {
  skillList: SkillListType[];
  setModifySkillList?: Dispatch<SetStateAction<SkillListType[]>>;
  handleSkillIconDelete: (type: string, name: string) => void;
}

export default function PortfolioSkills({
  skillList,
  setModifySkillList,
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
          skillType={skillSet.type}
          skillList={skillSet.skills}
          onDelete={handleSkillIconDelete}
        />
      ))}
    </Masonry>
  );
}
