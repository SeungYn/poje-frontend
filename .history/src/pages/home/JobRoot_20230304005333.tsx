import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function JobRoot() {
  return (
    <JobRootContainer>
      <Outlet />
    </JobRootContainer>
  );
}

const JobRootContainer = styled.section`
  background-color: ${(props) => props.theme.bgSemiDarkColor};
  width: 100%;
  height: 100vh;
`;
