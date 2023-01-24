import styled from 'styled-components';
import PortAboutMeContainer from '../../components/portfolio/aboutPart/PortfolioAboutMeContainer';
import PortfolioIntro from '../../components/portfolio/PortfolioIntro';
import PortfolioSkillsContainer from '../../components/portfolio/skillPart/PortfolioSkillsContainer';

export default function PortfolioMain() {
  return (
    <Container>
      <PortfolioIntro />
      <PortAboutMeContainer />
      <PortfolioSkillsContainer />
    </Container>
  );
}

const Container = styled.main``;
