import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { CommonBtn } from '../../styledComponents/styledComponents';
import { AuthFormContainer } from './styledComponets';

export default function AuthLoginForm() {
  const { register, handleSubmit } = useForm();
  return (
    <AuthFormContainer>
      <TopSide>
        <span>계정이 없으신가요?</span>
        <MoveToLoginOrSignUpBtn>SIGN UP</MoveToLoginOrSignUpBtn>
      </TopSide>
      <Header>
        <h1>WelCome Back</h1>
        <p>Login your account</p>
      </Header>
      <AuthForm>
        <AuthLabel htmlFor='loginId'>
          <span>LoginId</span>
          <input type='text' id='loginId' placeholder='LoginId' />
        </AuthLabel>
        <AuthLabel htmlFor='password'>
          <span>Password</span>
          <input type='password' id='password' placeholder='password' />
        </AuthLabel>
        <LoginBtn>로그인</LoginBtn>
      </AuthForm>
    </AuthFormContainer>
  );
}

const TopSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & span {
    font-size: 1rem;
    margin-right: 0.6rem;
    color: ${(props) => props.theme.textColor};
    opacity: 0.5;
  }
`;

const MoveToLoginOrSignUpBtn = styled(CommonBtn)`
  box-shadow: 1px 1px 1px 1px gray;
`;

const Header = styled.header`
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

const AuthForm = styled.form`
  margin-top: 3rem;
`;

const AuthLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 1.4rem;

  & span {
    font-size: 1.2rem;
  }

  & input {
    margin-top: 0.8rem;
    font-size: 1.2rem;
    padding: 0.8rem 0.6rem;
    border: 1px solid rgb(153, 153, 153);
    border-radius: 1rem;
  }
`;

const LoginBtn = styled(CommonBtn)`
  background: ${(props) => props.theme.mainColorSemiDark};
  color: ${(props) => props.theme.textAccentColor};
`;
