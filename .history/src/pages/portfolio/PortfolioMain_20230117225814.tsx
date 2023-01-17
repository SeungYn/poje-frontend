import React from 'react';
import styled from 'styled-components';
const BAKCGROUND_IMAGE = `${process.env.PUBLIC_URL}/public_assets/portfolioBackground.jpg`;
export default function PortfolioMain() {
  return (
    <Container>
      <AboutMe imgUrl={BAKCGROUND_IMAGE}>d</AboutMe>
    </Container>
  );
}

const Container = styled.main``;

const AboutMe = styled.section<{ imgUrl: string }>`
  position: relative;
  padding: 4rem 2rem 2rem 2rem;
  &::before {
    content: '';
    position: absolute;
    background-image: url(${BAKCGROUND_IMAGE});
  }
`;
