import JobSearchContent from '@src/components/home/JobPage/JobSearchContent';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function JobSearchPage() {
  const param = useParams();
  console.log(param);
  return <Container>
    <JobSearchContent />
  </Container>;
}

const Container = styled.section`
  background-color: ${(props) => props.theme.bgSemiDarkColor};
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
`;
