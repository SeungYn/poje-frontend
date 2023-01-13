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
              <input type='text' id='loginId' placeholder='아이디' />
            </AuthLabel>
            <AuthLabel htmlFor='password'>
              <span>Password</span>
              <input type='password' id='password' placeholder='비밀번호' />
            </AuthLabel>
            <AuthLabel htmlFor='password confirm'>
              <span>Password</span>
              <input
                type='password'
                id='password confirm'
                placeholder='비밀번호 확인'
              />
            </AuthLabel>
            <AuthLabel htmlFor='email'>
              <span>Email</span>
              <input type='eamil' id='eamil' placeholder='이메일' />
            </AuthLabel>

            <AuthSlideNextBtn type={'button'} onClick={handlerSildeNext}>
              다음
            </AuthSlideNextBtn>
          </AuthSlideForm>
        </SwiperSlide>

        <SwiperSlide>
          <AuthSlideForm>
            <AuthLabel htmlFor='name'>
              <span>Name</span>
              <input type='text' id='name' placeholder='이름' />
            </AuthLabel>
            <AuthLabel htmlFor='phoneNum'>
              <span>PhoneNum(선택)</span>
              <input type='text' id='phoneNum' placeholder='전화번호(선택)' />
            </AuthLabel>
            <AuthLabel htmlFor='gender'>
              <span>Gender</span>
              <select id='gender' placeholder='성별'>
                <option value='male'>남자</option>
                <option value='female'>여자</option>
              </select>
            </AuthLabel>
            <AuthLabel htmlFor='phoneNum'>
              <span>PhoneNum(선택)</span>
              <input type='text' id='phoneNum' placeholder='전화번호(선택)' />
            </AuthLabel>
            <AuthSlideFooter>
              <AuthSlideNextBtn type={'button'} onClick={handlerSildePrev}>
                이전
              </AuthSlideNextBtn>
              <AuthSlideNextBtn type={'button'} onClick={handlerSildeNext}>
                다음
              </AuthSlideNextBtn>
            </AuthSlideFooter>
          </AuthSlideForm>
        </SwiperSlide>

        <SwiperSlide>
          <AuthSlideForm>
            <AuthLabel htmlFor='name'>
              <span>Name</span>
              <input type='text' id='name' placeholder='이름' />
            </AuthLabel>
            <AuthLabel htmlFor='phoneNum'>
              <span>PhoneNum(선택)</span>
              <input type='text' id='phoneNum' placeholder='전화번호(선택)' />
            </AuthLabel>
            <AuthLabel htmlFor='gender'>
              <span>Gender</span>
              <select id='gender' placeholder='성별'>
                <option value='male'>남자</option>
                <option value='female'>여자</option>
              </select>
            </AuthLabel>
            <AuthLabel htmlFor='phoneNum'>
              <span>PhoneNum(선택)</span>
              <input type='text' id='phoneNum' placeholder='전화번호(선택)' />
            </AuthLabel>
            <AuthSlideFooter>
              <AuthSlideNextBtn type={'button'} onClick={handlerSildePrev}>
                이전
              </AuthSlideNextBtn>
              <AuthSlideNextBtn type={'button'} onClick={handlerSildeNext}>
                다음
              </AuthSlideNextBtn>
            </AuthSlideFooter>
          </AuthSlideForm>
        </SwiperSlide>
      </Swiper>
    </AuthFormContainer>
  );
}

const AuthSlideForm = styled(AuthForm)`
  padding: 0.4rem 0.8rem;
`;

const AuthSlideNextBtn = styled(LoginBtn)``;

const AuthSlideFooter = styled.div`
  display: flex;
  justify-content: space-around;
`;
