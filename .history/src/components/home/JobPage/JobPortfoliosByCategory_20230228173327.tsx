import usePortfolioLists from '@src/hooks/job/usePortfolioLists';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import JobPortfolioList from './JobPortfolioList';
import JobPortfolioPagingFooter from './JobPortfolioPagingFooter';

export default function JobPortfoliosByCategory() {
  const { type, page } = useParams<{ type: string, page:string }>();
  const {pageingUtil, pfAndMemberResp} = usePortfolioLists({ jobName: type! , page:page!});
  
  //param.type! as string
  return (
    <Container >
      <JobPortfolioListContainer>
        <JobPortfolioList list={pfAndMemberResp} />
      </JobPortfolioListContainer>
      <JobPortfolioPagingFooter {...pageingUtil} type={type!} currentPage={page!} />
    </Container>
  );
}


const Container = styled.div`
  display:flex;
  flex-direction: column;
  height:100%;
  width:100%;

  
`;

const JobPortfolioListContainer = styled.div`
  position:relative;
  height: 100%;
  overflow: hidden;
  
`