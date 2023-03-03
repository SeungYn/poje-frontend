import JobPortfoliosBySearch from '@src/components/home/JobPage/JobPortfoliosBySearch';
import JobPortfolioListContent from '@src/components/home/JobPage/JobProfileListContent';
import styled from 'styled-components';

export default function JobSearchPage() {
  return (
    <Container>
      <JobPortfolioListContent>
        <JobPortfoliosBySearch />
      </JobPortfolioListContent>
    </Container>
  );
}

const Container = styled.section`
  background-color: ${(props) => props.theme.bgSemiDarkColor};
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
`;
