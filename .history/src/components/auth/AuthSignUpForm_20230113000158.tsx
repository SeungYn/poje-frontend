import styled from 'styled-components';
import {
  AuthForm,
  AuthFormContainer,
  AuthLabel,
  Header,
  LoginBtn,
  MoveToLoginOrSignUpBtn,
  TopSide,
} from './styledComponets';

export default function AuthSignUpForm() {
  return (
    <AuthFormContainer>
      <TopSide>
        <span>계정이 있으신가요?</span>
        <MoveToLoginOrSignUpBtn>LOGIN</MoveToLoginOrSignUpBtn>
      </TopSide>
      <Header>
        <h1>WelCome Back</h1>
        <p>Login your account</p>
      </Header>
    </AuthFormContainer>
  );
}

const SlideWrap = styled.div``;

const SlideForm = styled.article`
  /* overflow: hidden; */
  position: relative;
  display: flex;
  min-width: 0;
  padding: 0.4rem;
  height: 70%;
  ${AuthForm} {
    display: block;
  }
`;
