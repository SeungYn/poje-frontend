import useJobSearch from '@src/hooks/job/useJobSearch';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import JobPortfolioList from './JobPortfolioList';


export default function JobPortfoliosBySearch() {
  const { type, page, keyword } = useParams<{ type: string, page: string; keyword: string }>();
  const { pageingUtil, pfAndMemberResp} = useJobSearch({ jobName: type!, page:page!, keyword:keyword! });
  return (
    <Container>
      <JobPortfolioListContainer >
      <JobPortfolioList list={pfAndMemberResp} />
      </JobPortfolioListContainer>
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