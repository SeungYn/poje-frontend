import React from 'react';
import styled from 'styled-components';
import PortfolioAboutMe from '../../components/portfolio/PortfolioAboutMe';
import PortfolioIntro from '../../components/portfolio/PortfolioIntro';

export default function PortfolioMain() {
  return (
    <Container>
      <PortfolioIntro />
      <PortfolioAboutMe />
    </Container>
  );
}

const Container = styled.main``;
