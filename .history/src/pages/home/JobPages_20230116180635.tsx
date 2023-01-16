import styled from 'styled-components';
import JobContent from '../../components/home/JobPage/JobContent';
import JobNavbar from '../../components/home/JobPage/JobNavbar';

import { breakPoint, mediaMin } from '../../styledComponents/media';

export default function JobPages() {
  return (
    <Container>
      <JobNavbar />
      <JobContent />
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
