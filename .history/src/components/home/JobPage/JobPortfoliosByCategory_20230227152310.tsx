import usePortfolioLists from '@src/hooks/job/usePortfolioLists';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import JobPortfolioList from './JobPortfolioList';

export default function JobPortfoliosByCategory() {
  const { type } = useParams<{ type: string }>();
  const { jobList } = usePortfolioLists({ jobName: type! });
  //param.type! as string
  return (
    <Container >
       <JobPortfolioList list={jobList} />
   </Container>
  );
}


const Container = styled.div`
  overflow: hidden;
  flex-shrink: 0;
  flex-grow: 0;
  height:100%;
`;
