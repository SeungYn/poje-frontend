import styled, { useTheme } from 'styled-components';
import { NavLink, useParams } from 'react-router-dom';
import useJobCategory from '@src/hooks/job/useJobCategory';
import { breakPoint } from '@src/styledComponents/media';
import { useEffect } from 'react';

export default function JobCategory() {
  const theme = useTheme();
  const { type } = useParams<{ type: string }>();
  const activeStyle = {
    color: theme.textColor,
  };
  const { category } = useJobCategory();

  return (
    <JobList>
      {category.map(({ name }, i) => (
        <JobItem key={name}>
          <NavLink
            to={`/job/${name}/1`}
            style={type && type === name ? activeStyle : undefined}
          >
            {name}
          </NavLink>
        </JobItem>
      ))}
      <JobItem>
        <NavLink
          to={`/job/like/1`}
          style={type === undefined ? activeStyle : undefined}
        >
          {'좋아요 누른 포트폴리오'}
        </NavLink>
      </JobItem>
    </JobList>
  );
}

const JobList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-left: 1px solid ${({ theme }) => theme.textColor};
  @media screen and (max-width: ${breakPoint.mm}) {
    flex-direction: row;
    border-top: 1px solid ${({ theme }) => theme.textColor};
    border-left: none;
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
