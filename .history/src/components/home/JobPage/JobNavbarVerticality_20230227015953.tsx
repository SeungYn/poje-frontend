import styled from 'styled-components';
import JobCategory from './JobCategory';



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

