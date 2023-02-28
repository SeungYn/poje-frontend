import JobPortfolioListContent from '@src/components/home/JobPage/JobProfileListContent';
import JobSearchContent from '@src/components/home/JobPage/JobProfileListContent';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function JobSearchPage() {
  const param = useParams();
  console.log(param);
  return <Container>
    <JobPortfolioListContent ><div>검색결과</div></JobPortfolioListContent>
  </Container>;
}

const Container = styled.section`
  background-color: ${(props) => props.theme.bgSemiDarkColor};
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
`;
