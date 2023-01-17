import React from 'react';
import styled from 'styled-components';
import PortfolioAboutMe from '../../components/portfolio/PortfolioAboutMe';
import PortAboutMeContainer from '../../components/portfolio/PortfolioAboutMeContainer';
import PortfolioIntro from '../../components/portfolio/PortfolioIntro';

export default function PortfolioMain() {
  return (
    <Container>
      <PortfolioIntro />
      <PortAboutMeContainer />
    </Container>
  );
}

const Container = styled.main``;
