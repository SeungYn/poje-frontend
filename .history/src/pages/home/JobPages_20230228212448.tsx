import JobPortfoliosByCategory from '@src/components/home/JobPage/JobPortfoliosByCategory';
import JobPortfolioListContent from '@src/components/home/JobPage/JobProfileListContent';
import { breakPoint } from '@src/styledComponents/media';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import JobNavbarVerticality from '../../components/home/JobPage/JobNavbarVerticality';

export default function JobPages() {
  const param = useParams();
  return (
    <Container>
      <JobNavbarVerticality />
      <JobPortfolioListContent>
        <JobPortfoliosByCategory />
      </JobPortfolioListContent>
    </Container>
  );
}

const Container = styled.section`
  position:relative;
  background-color: ${(props) => props.theme.bgSemiDarkColor};
  height: 100%;
  width: 100%;
  display: flex;
  overflow: auto;

  @media screen and (max-width:${breakPoint.mm}){
    flex-direction: column;
  }
`;
