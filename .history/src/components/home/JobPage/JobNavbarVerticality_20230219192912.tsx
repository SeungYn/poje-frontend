import { Suspense } from 'react';
import styled from 'styled-components';
import JobCategory from './JobCategory';

type NavType = {
  developer: string;
  designer: string;
  publisher: string;
  [key: string]: string;
};

export default function JobNavbarVerticality() {
  return (
    <JobNav>
     
        <JobCategory />
   
    </JobNav>
  );
}

const JobNav = styled.nav`
  color: ${(props) => props.theme.textColorToneDownTick};
  padding: 1rem 1rem;
`;

// type NavType = {
//   developer: string;
//   designer: string;
//   publisher: string;
//   [key: string]: string;
// };

// const navList: NavType = Object.freeze({
//   developer: '개발자',
//   designer: '디자이너',
//   publisher: '퍼블리셔',
//   a: '1',
// });
