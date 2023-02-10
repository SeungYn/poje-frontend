import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import JobContent from '../../components/home/JobPage/JobContent';
import JobNavbarVerticality from '../../components/home/JobPage/JobNavbarVerticality';

export default function JobPages() {
  const param = useParams();
  console.log(param);
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
  width: 100%;
  display: flex;
  overflow: hidden;
`;
