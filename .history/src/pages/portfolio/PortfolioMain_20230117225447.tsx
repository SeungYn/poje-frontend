import React from 'react';
import styled from 'styled-components';
const BAKCGROUND_IMAGE = `${process.env.PUBLIC_URL}/public_assets/portfolioBackground.jpg`;
export default function PortfolioMain() {
  return (
    <Container>
      <AboutMe></AboutMe>
    </Container>
  );
}

const Container = styled.main``;

const AboutMe = styled.section<{ imgUrl: string }>`
  position: relative;
  &::before {
    position: absolute;
    background-image: url(${BAKCGROUND_IMAGE});
  }
`;
