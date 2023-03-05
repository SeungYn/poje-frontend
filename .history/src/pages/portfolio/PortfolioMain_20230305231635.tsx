import AsideGroup from '@src/components/portfolio/AsideGroup';
import PortfolioLike from '@src/components/portfolio/PortfolioLike';
import PortfolioInfoContextProvider from '@src/context/PortfolioInfoContext';
import styled from 'styled-components';
import PortAboutMeContainer from '../../components/portfolio/aboutPart/PortfolioAboutMeContainer';
import PortfolioIntroContainer from '../../components/portfolio/introPart/PortfolioIntroContainer';
import ProjectsContainer from '../../components/portfolio/projectsPart/ProjectsContainer';
import PortfolioSkillsContainer from '../../components/portfolio/skillPart/PortfolioSkillsContainer';

export default function PortfolioMain() {
  return (
    <Container>
      <PortfolioInfoContextProvider>
        <PortfolioIntroContainer />
        <PortAboutMeContainer />
        <PortfolioSkillsContainer />
        <ProjectsContainer />
        <AsideGroup />
      </PortfolioInfoContextProvider>
    </Container>
  );
}

const Container = styled.main``;
