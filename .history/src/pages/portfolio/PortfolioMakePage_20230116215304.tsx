import styled from 'styled-components';
const BACKGROUND_IMG_URL = `${process.env.PUBLIC_URL}/public_assets/portfolio_write.jpg`;
export default function PortfolioMakePage() {
  return (
    <Container backgroundImgUrl={BACKGROUND_IMG_URL}>
      <MakeFormContainer>
        <MakeForm></MakeForm>
      </MakeFormContainer>
    </Container>
  );
}

const Container = styled.section<{ backgroundImgUrl: string }>`
  position: relative;
  height: 100vh;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.backgroundImgUrl});
    background-position: center;
    background-size: cover;
    filter: blur(5px) brightness(0.8);
    transform: scale(1.1);
  }
`;

const MakeFormContainer = styled.div``;

const MakeForm = styled.form``;
