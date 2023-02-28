import usePortfolioLists from '@src/hooks/job/usePortfolioLists';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import JobPortfolioList from './JobPortfolioList';

export default function JobPortfoliosByCategory() {
  const { type, page } = useParams<{ type: string, page:string }>();
  const { jobList } = usePortfolioLists({ jobName: type! });
  console.log(type, page);
  //param.type! as string
  return (
    <Container >
      <JobPortfolioList list={jobList} />
      <p>123</p>
   </Container>
  );
}


const Container = styled.div`
  height:100%;
  overflow: hidden;
  width:100%;
  & > p{
    height:50px;
    width:100%;
    background-color: black;
 
  }
`;
