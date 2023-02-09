import useAuth from '@src/hooks/auth/useAuth';
import { FormEvent, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
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
  password: string;
}

export default function AuthLoginForm() {
  const { register, handleSubmit } = useForm<LoginInputType>();

  const { login } = useAuth();

  const onSumbit: SubmitHandler<LoginInputType> = (data) => {
    console.log(data);
    login(data);
  };

  useEffect(() => {
    throw new Error('dpfspdp');
  }, []);
  return (
    <AuthFormContainer onSubmit={handleSubmit(onSumbit)}>
      <TopSide>
        <span>계정이 없으신가요?</span>
        <MoveToLoginOrSignUpBtn>
          <Link to='/auth/signup'>SignUp</Link>
        </MoveToLoginOrSignUpBtn>
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
            {...register('password')}
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
