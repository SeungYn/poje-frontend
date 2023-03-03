import JobPortfolioListContent from '@src/components/home/JobPage/JobProfileListContent';
import { breakPoint } from '@src/styledComponents/media';
import styled from 'styled-components';

export default function JobLikePage() {
  return (
    <Container>
      <JobPortfolioListContent>
        <div></div>
      </JobPortfolioListContent>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;

  @media screen and (max-width: ${breakPoint.mm}) {
    flex-direction: column;
  }
`;
