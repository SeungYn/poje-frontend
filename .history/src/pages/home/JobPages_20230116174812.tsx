import styled from 'styled-components';
import JobNavbar from '../../components/home/JobPage/JobNavbar';

import { breakPoint, mediaMin } from '../../styledComponents/media';

export default function JobPages() {
  return (
    <Container>
      <JobNavbar />
    </Container>
  );
}

const Container = styled.section`
  background-color: ${(props) => props.theme.mainColorSemiDark};
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
