import usePortfolioLists from '@src/hooks/job/usePortfolioLists';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import JobPortfolioList from './JobPortfolioList';

export default function JobPortfoliosByCategory() {
  const { type, page } = useParams<{ type: string, page:string }>();
  const { jobList } = usePortfolioLists({ jobName: type! , page:page!});
  console.log(type, page);
  //param.type! as string
  return (
    <Container >
      <JobPortfolioListContainer>
        <JobPortfolioList list={jobList} />
      </JobPortfolioListContainer>
      <p>123</p>
   </Container>
  );
}


const Container = styled.div`
  height:100%;
  width:100%;
  & > p{
    height:50px;
    width:100%;
    background-color: black;
 
  }
`;

const JobPortfolioListContainer = styled.div`
 height: 80%;
  overflow: hidden;
  
`