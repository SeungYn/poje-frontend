import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import { front } from '../../svgs/Test1';
import PortfolioSkillItem from './PortfolioSkillItem';

const breakpointColumnsObj = Object.freeze({
  default: 6,
  1400: 5,
  1000: 4,
  700: 2,
  500: 1,
});

type skillsType = {
  [key: string]: string[];
};

export default function PortfolioSkills() {
  const skillItems = ['css_icon.png', 'html_icon.png'];
  const skillItems2 = [
    'css_icon.png',
    'html_icon.png',
    'html_icon.png',
    'html_icon.png',
    'html_icon.png',
  ];
  const skillTitle = ['test1', 'test2', 'test3', 'test4'];
  const skills: skillsType = {
    frontEnd: [
      'css_icon.png',
      'html_icon.png',
      'html_icon.png',
      'html_icon.png',
      'html_icon.png',
    ],
  };

  console.log(front);
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='skillsContainer'
      columnClassName='skillsStack'
    >
      {Object.keys(skills).map((title) => (
        <PortfolioSkillItem skillTitle={title} skillList={skills[title]} />
      ))}
    </Masonry>
  );
}
