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
  return (
    <JobNav>
      <JobList>
        {Object.keys(navList).map((type, i) => (
          <JobItem key={type}>
            <NavLink
              to={`/job/${type}`}
              style={({ isActive }) => (isActive ? activeStyle : '')}
            >
              {navList[type]}
            </NavLink>
          </JobItem>
        ))}
      </JobList>
    </JobNav>
  );
}

const JobNav = styled.nav`
  background: ${({ theme }) => theme.bgSemiDarkColor};
  color: ${(props) => props.theme.textColorToneDownTick};
`;

const JobList = styled.ul`
  display: flex;
`;

const JobItem = styled.li`
  &:hover {
    z-index: 11;
  }

  & a {
    display: block;
    padding: 0.8rem 1rem;
  }
`;
