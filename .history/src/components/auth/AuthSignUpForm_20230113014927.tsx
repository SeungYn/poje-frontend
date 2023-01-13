import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide, useSwiper, SwiperProps } from 'swiper/react';
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

export default function AuthSignUpForm() {
  const swiper = useSwiper();
  const next = useRef<HTMLButtonElement>(null);
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
        navigation={{ nextEl: next.current }}
        onSwiper={(sw: SwiperType) => console.log(sw.params.navigation)}
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
            <AuthLabel htmlFor='password'>
              <span>Password</span>
              <input type='password' id='password' placeholder='password' />
            </AuthLabel>
            <LoginBtn>로그인</LoginBtn>
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
        <button ref={next}>dd</button>
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

const SlideWrap = styled.div``;

const SlideForm = styled.article`
  /* overflow: hidden; */
  position: relative;
  padding: 0.4rem;
  height: 70%;
  ${AuthForm} {
    display: block;
  }
`;

const AuthSlideForm = styled(AuthForm)`
  padding: 0.4rem 0.8rem;
`;
