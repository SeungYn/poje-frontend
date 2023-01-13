import { useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Swiper as SwiperType } from 'swiper';

import {
  AuthForm,
  AuthFormContainer,
  AuthLabel,
  Header,
  LoginBtn,
  MoveToLoginOrSignUpBtn,
  TopSide,
} from './styledComponets';
import 'swiper/css';
import 'swiper/css/navigation';
import { CommonBtn } from '../../styledComponents/styledComponents';

export default function AuthSignUpForm() {
  const swiperRef = useRef<SwiperType>();

  const handlerSildePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handlerSildeNext = () => {
    swiperRef.current?.slideNext();
  };

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

      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <AuthSlideForm>
            <AuthLabel htmlFor='loginId'>
              <span>LoginId</span>
              <input type='text' id='loginId' placeholder='LoginId' />
            </AuthLabel>
            <AuthLabel htmlFor='password'>
              <span>Password</span>
              <input type='password' id='password' placeholder='password' />
            </AuthLabel>
            <AuthLabel htmlFor='password confirm'>
              <span>Password</span>
              <input
                type='password'
                id='password confirm'
                placeholder='password confirm'
              />
            </AuthLabel>
            <AuthLabel htmlFor='email'>
              <span>Email</span>
              <input type='eamil' id='eamil' placeholder='password' />
            </AuthLabel>

            <AuthSlideNextBtn type={'button'} onClick={handlerSildeNext}>
              다음
            </AuthSlideNextBtn>
          </AuthSlideForm>
        </SwiperSlide>
        <SwiperSlide>
          <AuthSlideForm>
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
          </AuthSlideForm>
        </SwiperSlide>
        <div onClick={() => swiperRef.current?.slideNext()}>dd</div>
      </Swiper>

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
    </AuthFormContainer>
  );
}

const AuthSlideForm = styled(AuthForm)`
  padding: 0.4rem 0.8rem;
`;

const AuthSlideNextBtn = styled(LoginBtn)`
  margin-left: auto;
`;
