import useAuth from '@src/hooks/auth/useAuth';
import { SubmitHandler, useForm } from 'react-hook-form';
import AuthTopSide from './AuthTopSide';
import {
  AuthForm,
  AuthFormContainer,
  AuthLabel,
  Header,
  LoginBtn,
} from './styledComponets';

interface LoginInputType {
  loginId: string;
  password: string;
}

export default function AuthLoginForm() {
  const { register, handleSubmit } = useForm<LoginInputType>();

  const { login } = useAuth();

  const onSumbit: SubmitHandler<LoginInputType> = (data) => {
    login(data);
  };

  return (
    <AuthFormContainer onSubmit={handleSubmit(onSumbit)}>
      <AuthTopSide isLogin={true} />
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
