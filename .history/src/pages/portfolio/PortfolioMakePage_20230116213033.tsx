import styled from 'styled-components';
const BACKGROUND_IMG_URL = `${process.env.PUBLIC}/public_assets/portfolio_write.jpg`;
export default function PortfolioMakePage() {
  return (
    <Container backgroundImgUrl={BACKGROUND_IMG_URL}>
      ProtfolioMakePage
    </Container>
  );
}

const Container = styled.section<{ backgroundImgUrl: string }>`
  background-image: url(${(props) => props.backgroundImgUrl});
`;
