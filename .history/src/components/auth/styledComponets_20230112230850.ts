import styled from 'styled-components';
import { CommonBtn } from '../../styledComponents/styledComponents';

export const AuthFormContainer = styled.section`
  max-width: 640px;
  width: 100%;
  height: 100%;
  padding: 3rem 3rem;
`;

export const TopSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.mainColor};
  & span {
    font-size: 1rem;
    margin-right: 0.6rem;
    color: ${(props) => props.theme.mainColor};
    filter: brightness(0.9);
  }
`;

export const MoveToLoginOrSignUpBtn = styled(CommonBtn)`
  box-shadow: 1px 1px 1px 1px ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.mainColor};
`;

export const Header = styled.header`
  margin-top: 2rem;
  color: ${(props) => props.theme.textColor};
  & h1 {
    color: ${(props) => props.theme.mainColor};
    font-size: 3rem;
    font-weight: bold;
  }

  & p {
    font-size: 1.4rem;
    opacity: 0.4;
  }
`;

export const AuthForm = styled.form`
  margin-top: 3rem;
`;

export const AuthLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 1.4rem;

  & span {
    font-size: 1.2rem;
    color: ${(props) => props.theme.mainColor};
    filter: brightness(0.9);
  }

  & input {
    margin-top: 0.8rem;
    font-size: 1.2rem;
    padding: 0.8rem 0.6rem;
    border: 1px solid ${(props) => props.theme.mainColorSemiDark};
    border-radius: 1rem;
    box-shadow: 1px 1px 8px ${(props) => props.theme.mainColor};
  }
`;

export const LoginBtn = styled(CommonBtn)`
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.textAccentColor};
  padding: 0.8rem 4rem;
  font-size: 1.2rem;
  box-shadow: 1px 1px 8px gray;
  margin-top: 3rem;
`;
