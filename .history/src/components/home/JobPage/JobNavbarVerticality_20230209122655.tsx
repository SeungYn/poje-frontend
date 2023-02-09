import useJobCategory from '@src/hooks/job/useJob';
import { Suspense } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

type NavType = {
  developer: string;
  designer: string;
  publisher: string;
  [key: string]: string;
};

const navList: NavType = Object.freeze({
  developer: '개발자',
  designer: '디자이너',
  publisher: '퍼블리셔',
  a: '1',
});

export default function JobNavbarVerticality() {
  const theme = useTheme();
  const activeStyle = {
    color: theme.textColor,
  };
  const { category, isLoading } = useJobCategory();

  return (
    <JobNav>
      <Suspense fallback={<div>로딩중</div>}>
        <JobList>
          {category!.map(({ name }, i) => (
            <JobItem key={name}>
              <NavLink
                to={`/job/${name}`}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {name}
              </NavLink>
            </JobItem>
          ))}
        </JobList>
      </Suspense>
    </JobNav>
  );
}

const JobNav = styled.nav`
  color: ${(props) => props.theme.textColorToneDownTick};
  padding: 1rem 1rem;
`;

const JobList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-left: 1px solid ${({ theme }) => theme.textColor};
`;

const JobItem = styled.li`
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontRegular};
  a {
    padding: 0.8rem;
    display: block;
    width: 100%;
  }
`;
