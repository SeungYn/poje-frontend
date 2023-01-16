import styled from 'styled-components';

export default function PortfolioMakePage() {
  return <div>ProtfolioMakePage</div>;
}

const Container = styled.section<{ backgroundImgUrl: string }>`
  background-image: url(${process.env
    .PUBLIC}/public_assets/portfolio_write.jpg);
`;
