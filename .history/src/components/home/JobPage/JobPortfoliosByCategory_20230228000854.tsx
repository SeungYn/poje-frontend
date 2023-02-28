import usePortfolioLists from '@src/hooks/job/usePortfolioLists';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import JobPortfolioList from './JobPortfolioList';
import JobPortfolioPagingFooter from './JobPortfolioPagingFooter';

export default function JobPortfoliosByCategory() {
  const { type, page } = useParams<{ type: string, page:string }>();
  const {pageingUtil, pfAndMemberResp} = usePortfolioLists({ jobName: type! , page:page!});
  console.log(pageingUtil, pfAndMemberResp);
  //param.type! as string
  return (
    <Container >
      <Suspense fallback={<div>로딩중</div>}>
      <JobPortfolioListContainer>
        {/* <JobPortfolioList list={jobList} /> */}
      </JobPortfolioListContainer>
        <JobPortfolioPagingFooter {...pageingUtil} type={type!} />
      </Suspense>
   </Container>
  );
}


const Container = styled.div`
  display:flex;
  flex-direction: column;
  height:100%;
  width:100%;
  & > p{
    height:50px;
    width:100%;
    background-color: black;
 
  }
`;

const JobPortfolioListContainer = styled.div`
position:relative;
 height: 100%;
  overflow: hidden;
  
`