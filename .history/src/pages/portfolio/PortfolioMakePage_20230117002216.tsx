import styled from 'styled-components';
const BACKGROUND_IMG_URL = `${process.env.PUBLIC_URL}/public_assets/portfolio_write.jpg`;
export default function PortfolioMakePage() {
  return (
    <Container backgroundImgUrl={BACKGROUND_IMG_URL}>
      <MakeFormContainer>
        <MakeForm>
          <FormTitle>포토폴리오 작성하기</FormTitle>
          <FormInput type='text' />
          <FormInput type='text' />
          <textarea name='' id='' maxLength={50} />
          <div>
            <button>이전으로</button>
            <button>작성하기</button>
          </div>
        </MakeForm>
      </MakeFormContainer>
    </Container>
  );
}

const Container = styled.section<{ backgroundImgUrl: string }>`
  position: relative;
  height: 100vh;
  width: 100%;

  &::before {
    z-index: -10;
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

const MakeFormContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 460px;
`;

const MakeForm = styled.form`
  overflow: hidden;
  width: 100%;
  border: 3px solid ${(props) => props.theme.mainColor};
  border-radius: 1rem;
  background: ${(props) => props.theme.mainColorLightTransparency};
  padding: 1rem;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.mainColorThickDark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const FormTitle = styled.h1``;

const FormInput = styled.input``;

const FormTextarea = styled.textarea``;
