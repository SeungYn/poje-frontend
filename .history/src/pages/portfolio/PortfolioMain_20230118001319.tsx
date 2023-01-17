import React from 'react';
import styled from 'styled-components';
import PortfolioIntro from '../../components/portfolio/PortfolioIntro';

export default function PortfolioMain() {
  return (
    <Container>
      <PortfolioIntro />
    </Container>
  );
}

const Container = styled.main``;

const CommonSection = styled.section``;
