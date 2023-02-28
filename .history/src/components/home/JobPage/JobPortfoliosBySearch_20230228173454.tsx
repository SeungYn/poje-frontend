import { useParams } from 'react-router-dom';
import styled from 'styled-components';


export default function JobPortfoliosBySearch() {
  const { type, page } = useParams<{ type: string, page:string }>();
  return (
    <Container>
      <JobPortfolioListContainer >
      {/* <JobPortfolioList list={pfAndMemberResp} /> */}
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