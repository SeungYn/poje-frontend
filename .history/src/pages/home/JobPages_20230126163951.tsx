import styled from 'styled-components';
import JobContent from '../../components/home/JobPage/JobContent';
import JobNavbarVerticality from '../../components/home/JobPage/JobNavbarVerticality';

import { breakPoint, mediaMin } from '../../styledComponents/media';

export default function JobPages() {
  return (
    <Container>
      <JobNavbarVerticality />
      <JobContent />
    </Container>
  );
}

const Container = styled.section`
  background-color: ${(props) => props.theme.bgSemiDarkColor};
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-direction: column;
  overflow: hidden;
`;
