import styled from 'styled-components';
import PortAboutMeContainer from '../../components/portfolio/aboutPart/PortfolioAboutMeContainer';
import ArchivingContainer from '../../components/portfolio/archivingPart/ArchivingContainer';
import PortfolioIntroContainer from '../../components/portfolio/introPart/PortfolioIntroContainer';
import PortfolioIntro from '../../components/portfolio/introPart/PortfolioIntroContainer';
import ProjectsContainer from '../../components/portfolio/projectsPart/ProjectsContainer';
import PortfolioSkillsContainer from '../../components/portfolio/skillPart/PortfolioSkillsContainer';

export default function PortfolioMain() {
  return (
    <Container>
      <PortfolioIntroContainer />
      <PortAboutMeContainer />
      <PortfolioSkillsContainer />
      {/* <ArchivingContainer /> */}
      <ProjectsContainer />
    </Container>
  );
}

const Container = styled.main``;
