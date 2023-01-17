import { useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import BeforeButton from '../../components/common/BeforeBtn';
import PortfolioMakeFormContainer from '../../components/portfolio/PortfolioMakeFormContainer';

const BACKGROUND_IMG_URL = `${process.env.PUBLIC_URL}/public_assets/portfolio_write.jpg`;

export default function PortfolioMakePage() {
  return (
    <Container backgroundImgUrl={BACKGROUND_IMG_URL}>
      <PortfolioMakeFormContainer />
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

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const MakeForm = styled.form`
  overflow: hidden;
  position: relative;
  width: 100%;
  border: 3px solid ${(props) => props.theme.mainColorDark};
  border-radius: 1rem;
  background: ${(props) => props.theme.mainColorLightTransparency};
  padding: 1rem;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.mainColorThickDark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

const FormTitle = styled.h1`
  color: ${({ theme }) => theme.mainColorDark};
`;

const MagicDiv = styled.div`
  position: relative;
  width: 100%;
  font-size: ${({ theme }) => theme.fontMiddleSize};
`;

const PlaceHolder = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.mainColorDark};
  pointer-events: none;
  transition: 0.3s;
  padding: 0.3rem;
  border-radius: 1rem;
`;

const FormInput = styled.input`
  font-size: 1.2rem;
  padding: 0.7rem 0.9rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: transparent;
  box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.35);
  border-radius: 1rem;
  width: 100%;

  &:valid ~ ${PlaceHolder}, &:focus ~ ${PlaceHolder} {
    background: ${({ theme }) => theme.mainColorLightTransparency};
    transform: translateY(-150%);
    border: 1px solid ${({ theme }) => theme.mainColorDark};
    font-size: 0.6rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }

  &:valid,
  &:focus {
    border: 2px solid ${({ theme }) => theme.mainColorDark};
  }
`;

const TextAreaPlaceHolder = styled(PlaceHolder)`
  top: 0;
  transform: none;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  resize: none;
  outline: none;
  border: none;
  box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.35);
  background: transparent;
  border-radius: 1rem;
  padding: 0.7rem 0.9rem;
  font-size: ${({ theme }) => theme.fontMiddleSize};

  &:valid ~ ${TextAreaPlaceHolder}, &:focus ~ ${TextAreaPlaceHolder} {
    background: ${({ theme }) => theme.mainColorLightTransparency};
    transform: translateY(-50%);
    border: 1px solid ${({ theme }) => theme.mainColorDark};
    font-size: 0.6rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }

  &:valid,
  &:focus {
    border: 2px solid ${({ theme }) => theme.mainColorDark};
  }
`;

const FormButton = styled.button`
  padding: 0.8rem 1rem;
  width: 100%;
  background: ${({ theme }) => theme.mainColorSemiDark};
  border-radius: 0.8rem;
  box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.35);
  color: ${({ theme }) => theme.mainColorDark};
  font-size: ${({ theme }) => theme.fontMiddleSize};
`;
