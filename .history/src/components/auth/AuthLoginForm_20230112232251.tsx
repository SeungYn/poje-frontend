import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { CommonBtn } from '../../styledComponents/styledComponents';
import {
  AuthForm,
  AuthFormContainer,
  AuthLabel,
  Header,
  LoginBtn,
  MoveToLoginOrSignUpBtn,
  TopSide,
} from './styledComponets';

interface LoginInputType {
  loginId: string;
  padding: string;
}

export default function AuthLoginForm() {
  const { register, handleSubmit } = useForm<LoginInputType>();

  const onSumbit = (data: any) => {
    console.log(data);
  };
  return (
    <AuthFormContainer onSubmit={handleSubmit(onSumbit)}>
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
          <input
            {...register('loginId')}
            type='text'
            id='loginId'
            placeholder='LoginId'
          />
        </AuthLabel>
        <AuthLabel htmlFor='password'>
          <span>Password</span>
          <input
            {...register('password1')}
            type='password'
            id='password'
            placeholder='password'
          />
        </AuthLabel>
        <LoginBtn>로그인</LoginBtn>
      </AuthForm>
    </AuthFormContainer>
  );
}
