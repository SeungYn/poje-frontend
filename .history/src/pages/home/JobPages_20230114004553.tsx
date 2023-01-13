import styled from 'styled-components';
import JobNavbar from '../../components/home/JobPage/JobNavbar';

export default function JobPages() {
  return (
    <Container>
      <JobNavbar />
      <PortFolioContainer></PortFolioContainer>
    </Container>
  );
}

const Container = styled.section`
  background-color: ${(props) => props.theme.mainColorSemiDark};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PortFolioContainer = styled.section`
  height: 100%;
  background-color: ${(props) => props.theme.mainColorSemiDark};
`;
