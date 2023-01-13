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
      <SlideForm>
        <AuthForm>
          <AuthLabel htmlFor='loginId'>
            <span>LoginId</span>
            <input type='text' id='loginId' placeholder='LoginId' />
          </AuthLabel>
          <AuthLabel htmlFor='password'>
            <span>Password</span>
            <input type='password' id='password' placeholder='password' />
          </AuthLabel>
          <AuthLabel htmlFor='password'>
            <span>Password</span>
            <input type='password' id='password' placeholder='password' />
          </AuthLabel>
          <LoginBtn>로그인</LoginBtn>
        </AuthForm>
      </SlideForm>
    </AuthFormContainer>
  );
}

const SlideForm = styled.article`
  overflow: hidden;
  padding: 0.4rem;
  height: 70%;
`;
