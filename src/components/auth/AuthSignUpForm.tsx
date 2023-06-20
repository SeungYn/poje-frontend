import { useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Swiper as SwiperType } from 'swiper';
import {
  AuthFormContainer,
  AuthLabel,
  Header,
  LoginBtn,
} from './styledComponets';
import 'swiper/css';
import 'swiper/css/navigation';

import { SubmitHandler, useForm } from 'react-hook-form';
import { JoinRequest } from '@src/service/types/auth';
import useAuth from '@src/hooks/auth/useAuth';
import useFormValidation from '@src/hooks/auth/useFormValidation';
import AuthTopSide from './AuthTopSide';

export default function AuthSignUpForm() {
  const { register, handleSubmit, getValues } = useForm<JoinRequest>();
  const { join } = useAuth();
  const {
    loginIdDuplicate,
    validLoginIdDuplicate,
    validatePassword,
    passwordValid,
    emailValid,
    validateEmail,
    confirmPassword,
    passwordConfirm,
    validateNickname,
    nicknameValid,
    phoneNumValid,
    birthValid,
    validateBirth,
    validatePhoneNum,
    finalConfirm,
  } = useFormValidation();
  const swiperRef = useRef<SwiperType>();

  const handlerSildePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handlerSildeNext = () => {
    swiperRef.current?.slideNext();
  };

  const onSubmit: SubmitHandler<JoinRequest> = (data) => {
    //console.log(errors);
    finalConfirm() && join({ ...data });
    //join({ ...data });
  };

  return (
    <AuthFormContainer>
      <AuthTopSide isLogin={false} />
      <Header>
        <h1>WelCome POJE</h1>
        <p>SignUp your account</p>
      </Header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <AuthSlideForm>
              <AuthFormLabel htmlFor='loginId'>
                <div>
                  <span>아이디</span>
                  {loginIdDuplicate && loginIdDuplicate.isValid === false && (
                    <RapidReponseText responseType={loginIdDuplicate.isValid}>
                      {loginIdDuplicate.message}
                    </RapidReponseText>
                  )}
                </div>
                <input
                  {...register('loginId', {
                    required: true,

                    onBlur: ({ target: { value } }) =>
                      value && validLoginIdDuplicate(value),
                  })}
                  className={
                    !loginIdDuplicate
                      ? undefined
                      : loginIdDuplicate.isValid
                      ? undefined
                      : 'error'
                  }
                  id='loginId'
                  type='text'
                  placeholder='아이디'
                  required
                />
              </AuthFormLabel>
              <AuthFormLabel htmlFor='password'>
                <div>
                  <span>비밀번호</span>
                  {passwordValid && passwordValid.isValid === false && (
                    <RapidReponseText responseType={passwordValid.isValid}>
                      {passwordValid.message}
                    </RapidReponseText>
                  )}
                </div>
                <input
                  {...register('password', {
                    onChange: ({ target: { value } }) =>
                      validatePassword(value),
                    required: true,
                  })}
                  type='password'
                  id='password'
                  placeholder='비밀번호'
                />
              </AuthFormLabel>
              <AuthFormLabel htmlFor='passwordConfirm'>
                <div>
                  <span>비밀번호 확인</span>
                  {passwordConfirm && passwordConfirm.isValid === false && (
                    <RapidReponseText responseType={passwordConfirm.isValid}>
                      {passwordConfirm.message}
                    </RapidReponseText>
                  )}
                </div>
                <input
                  {...register('passwordConfirm', {
                    required: true,

                    onChange: ({ target: { value } }) =>
                      confirmPassword(value, getValues('password')),
                  })}
                  type='password'
                  id='passwordConfirm'
                  placeholder='비밀번호 확인'
                />
              </AuthFormLabel>
              <AuthFormLabel htmlFor='email'>
                <div>
                  <span>이메일</span>
                  {emailValid && emailValid.isValid === false && (
                    <RapidReponseText responseType={emailValid.isValid}>
                      {emailValid.message}
                    </RapidReponseText>
                  )}
                </div>
                <input
                  {...register('email', {
                    required: true,
                    onChange: ({ target: { value } }) => validateEmail(value),
                  })}
                  type='email'
                  id='email'
                  placeholder='이메일'
                />
              </AuthFormLabel>

              <AuthSlideNextBtn type={'button'} onClick={handlerSildeNext}>
                다음
              </AuthSlideNextBtn>
            </AuthSlideForm>
          </SwiperSlide>

          <SwiperSlide>
            <AuthSlideForm>
              <AuthFormLabel htmlFor='nickName'>
                <div>
                  <span>이름</span>
                  {nicknameValid && nicknameValid.isValid === false && (
                    <RapidReponseText responseType={nicknameValid.isValid}>
                      {nicknameValid.message}
                    </RapidReponseText>
                  )}
                </div>
                <input
                  {...register('nickName', {
                    required: true,
                    onChange: ({ target: { value } }) =>
                      validateNickname(value),
                  })}
                  type='text'
                  id='nickName'
                  placeholder='이름'
                />
              </AuthFormLabel>
              <AuthFormLabel htmlFor='phoneNum'>
                <div>
                  <span>전화번호</span>
                  {phoneNumValid && phoneNumValid.isValid === false && (
                    <RapidReponseText responseType={phoneNumValid.isValid}>
                      {phoneNumValid.message}
                    </RapidReponseText>
                  )}
                </div>
                <input
                  {...register('phoneNum', {
                    required: true,
                    onChange: ({ target: { value } }) =>
                      validatePhoneNum(value),
                  })}
                  type='text'
                  id='phoneNum'
                  placeholder='전화번호(선택)'
                />
              </AuthFormLabel>
              <AuthFormLabel htmlFor='gender'>
                <div>
                  <span>성별</span>
                </div>
                <select
                  {...register('gender', { required: true })}
                  id='gender'
                  placeholder='성별'
                >
                  <option value='male'>남자</option>
                  <option value='female'>여자</option>
                </select>
              </AuthFormLabel>
              <AuthFormLabel htmlFor='Birth'>
                <div>
                  <span>생년월일</span>
                  {birthValid && birthValid.isValid === false && (
                    <RapidReponseText responseType={birthValid.isValid}>
                      {birthValid.message}
                    </RapidReponseText>
                  )}
                </div>
                <input
                  {...register('birth', {
                    required: true,
                    onChange: ({ target: { value } }) => validateBirth(value),
                  })}
                  type='text'
                  id='birth'
                  placeholder='생년월일'
                />
              </AuthFormLabel>
              <AuthSlideFooter>
                <AuthSlideNextBtn type={'button'} onClick={handlerSildePrev}>
                  이전
                </AuthSlideNextBtn>
                <AuthSlideNextBtn type={'submit'}>회원가입</AuthSlideNextBtn>
              </AuthSlideFooter>
            </AuthSlideForm>
          </SwiperSlide>
        </Swiper>
      </form>
    </AuthFormContainer>
  );
}

const AuthSlideForm = styled.div`
  margin-top: 0.4rem;
  padding: 0.4rem 0.8rem;
`;

const AuthFormLabel = styled(AuthLabel)`
  margin-top: 1rem;
  .error {
    border: red 1px solid;
  }
`;

const AuthSlideNextBtn = styled(LoginBtn)`
  margin-top: 2rem;
`;

const AuthSlideFooter = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  & > ${AuthSlideNextBtn} {
    width: 50%;
    word-break: normal;
  }
`;

const RapidReponseText = styled.span<{ responseType: boolean | undefined }>`
  font-size: ${({ theme }) => theme.fontSmall};
  margin-left: 0.8rem;
  color: ${({ responseType }) => (responseType ? 'green' : 'red')};
`;
