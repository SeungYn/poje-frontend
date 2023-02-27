import styled, { useTheme } from 'styled-components';
import { NavLink } from 'react-router-dom';
import useJobCategory from '@src/hooks/job/useJobCategory';
import { breakPoint } from '@src/styledComponents/media';

export default function JobCategory() {
  const theme = useTheme();
  const activeStyle = {
    color: theme.textColor,
  };
  const { category } = useJobCategory();

  return (
    <JobList>
      {category.map(({ name }, i) => (
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
  );
}

const JobList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-left: 1px solid ${({ theme }) => theme.textColor};
  @media screen and (max-width:${breakPoint.mm}){
    flex-direction: row;
  }


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
