import styled from 'styled-components';
import PortAboutMeContainer from '../../components/portfolio/aboutPart/PortfolioAboutMeContainer';
import ArchivingContainer from '../../components/portfolio/archivingPart/ArchivingContainer';
import PortfolioIntro from '../../components/portfolio/PortfolioIntro';
import PortfolioSkillsContainer from '../../components/portfolio/skillPart/PortfolioSkillsContainer';

export default function PortfolioMain() {
  return (
    <Container>
      <PortfolioIntro />
      <PortAboutMeContainer />
      <PortfolioSkillsContainer />
      <ArchivingContainer />
    </Container>
  );
}

const Container = styled.main``;
