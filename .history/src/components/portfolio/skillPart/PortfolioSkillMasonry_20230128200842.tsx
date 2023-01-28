import { ReactNode } from 'react';
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = Object.freeze({
  default: 6,
  1400: 5,
  1000: 4,
  700: 2,
  500: 1,
});

interface PortfolioSkillMasonryType {
  children: ReactNode;
}

export default function PortfolioSkillMasonry() {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='skillsContainer'
      columnClassName='skillsStack'
    >
      {}
    </Masonry>
  );
}
