import { useEffect, useRef } from 'react';
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
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { JoinRequest } from '@src/service/types/auth';
import useAuth from '@src/hooks/auth/useAuth';
import axios from 'axios';

export default function AuthSignUpForm() {
  const {
    register,
    handleSubmit,

    formState: { errors, isDirty, dirtyFields },
    setError,
    clearErrors,
    getValues,
  } = useForm<JoinRequest>();
  const { join, validLoginIdDuplicate, loginIdDuplicate } = useAuth();
  const swiperRef = useRef<SwiperType>();

  const handlerSildePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handlerSildeNext = () => {
    swiperRef.current?.slideNext();
  };

  const onSubmit: SubmitHandler<JoinRequest> = (data) => {
    //console.log(errors);
    join({ ...data });
  };

  //console.log(dirtyFields);
  // useEffect(() => {
  //   //console.log(getValues('loginId'));
  //   validLoginIdDuplicate({ loginId: 'asd', callbackError: () => {} });

  //   // axios
  //   //   .get('https://dd290981c7fc4b.lhr.life/loginId/123123')
  //   //   .then((res) => console.log(res));
  //   fetch('https://dd290981c7fc4b.lhr.life/loginId/123123')
  //     .then((res) => console.log('123', res))
  //     .catch((e) => console.log('error', e));
  //   console.log(123123);
  // }, []);
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <AuthFormContainer>
      <TopSide>
        <span>계정이 있으신가요?</span>
        <MoveToLoginOrSignUpBtn>
          <Link to='/auth/login'>Login</Link>
        </MoveToLoginOrSignUpBtn>
      </TopSide>
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
                  &nbsp;
                  {loginIdDuplicate && (
                    <RapidReponseText responseType={loginIdDuplicate.isValid}>
                      {loginIdDuplicate.message}
                    </RapidReponseText>
                  )}
                </div>
                <input
                  {...register('loginId', {
                    required: true,

                    onBlur: (e) =>
                      e.target.value && validLoginIdDuplicate(e.target.value),
                  })}
                  className={loginIdDuplicate?.isValid ? undefined : 'error'}
                  id='loginId'
                  type='text'
                  placeholder='아이디'
                  required
                />
              </AuthFormLabel>
              <AuthFormLabel htmlFor='password'>
                <div>
                  <span>비밀번호</span>
                </div>
                <input
                  {...register('password', {
                    required: true,
                  })}
                  type='password'
                  id='password'
                  placeholder='비밀번호'
                />
              </AuthFormLabel>
              <AuthFormLabel htmlFor='passwordConfirm'>
                <div>
                  <span>비밀번호 확인</span>{' '}
                  {errors.passwordConfirm && <span>{123}</span>}
                </div>
                <input
                  {...register('passwordConfirm', {
                    required: true,

                    onChange: (v) => {
                      const { value } = v.target;
                      return value !== getValues('password')
                        ? setError('passwordConfirm', {
                            type: 'confirm',
                            message: '비밀번호를 확인해주세요',
                          })
                        : clearErrors('passwordConfirm');
                    },
                  })}
                  type='password'
                  id='passwordConfirm'
                  placeholder='비밀번호 확인'
                />
              </AuthFormLabel>
              <AuthFormLabel htmlFor='email'>
                <span>이메일</span>
                <input
                  {...register('email', { required: true })}
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
                <span>이름</span>
                <input
                  {...register('nickName', { required: true })}
                  type='text'
                  id='nickName'
                  placeholder='이름'
                />
              </AuthFormLabel>
              <AuthFormLabel htmlFor='phoneNum'>
                <span>전화번호</span>
                <input
                  {...register('phoneNum', { required: true })}
                  type='text'
                  id='phoneNum'
                  placeholder='전화번호(선택)'
                />
              </AuthFormLabel>
              <AuthFormLabel htmlFor='gender'>
                <span>성별</span>
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
                <span>생년월일</span>
                <input
                  {...register('birth', { required: true })}
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
