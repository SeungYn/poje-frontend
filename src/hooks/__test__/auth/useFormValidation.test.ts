import '@testing-library/jest-dom';
import useFormValidation from '@src/hooks/auth/useFormValidation';
import { withAllContext } from '@src/test_util/util';
import { renderHook, act } from '@testing-library/react';
import { server } from '@src/test_util/mock/server';
import { rest } from 'msw';

describe('useFormValidation', () => {
  it('아이디 중복검사 통과 ✅', async () => {
    const { result } = renderHook(() => useFormValidation(), {
      wrapper: makeWrapper,
    });

    await act(async () => {
      await result.current.validLoginIdDuplicate('testuser');
    });

    expect(result.current.loginIdDuplicate?.isValid).toBe(true);
  });

  it('아이디 중복검사 실패 ❌', async () => {
    //given
    const { result } = renderHook(() => useFormValidation(), {
      wrapper: makeWrapper,
    });

    //when
    server.use(
      rest.get(
        `${process.env.REACT_APP_END_POINT}/loginId/:loginId`,
        (req, res, ctx) => {
          return res(
            ctx.status(404),
            ctx.json({ code: 400, message: '사용할 수 없는 아이디입니다.' })
          );
        }
      )
    );
    await act(async () => {
      await result.current.validLoginIdDuplicate('testuser');
    });

    //then
    expect(result.current.loginIdDuplicate?.isValid).toBe(false);
  });

  it('비밀번호 유효성 검사 통과 ✅', async () => {
    //given
    const { result } = renderHook(() => useFormValidation(), {
      wrapper: makeWrapper,
    });

    //when
    await act(async () => {
      result.current.validatePassword('!@#WkdWKDWKD123');
    });

    //then
    expect(result.current.passwordValid?.isValid).toBe(true);
  });

  it('비밀번호 유효성 검사 불통과 ❌', async () => {
    //given
    const { result } = renderHook(() => useFormValidation(), {
      wrapper: makeWrapper,
    });

    //when
    await act(async () => {
      result.current.validatePassword('123');
    });

    //then
    expect(result.current.passwordValid?.isValid).toBe(false);
  });

  it('비밀번호, 비밀번호 확인 일치 ✅', async () => {
    //given
    const { result } = renderHook(() => useFormValidation(), {
      wrapper: makeWrapper,
    });

    //when
    act(() => {
      result.current.confirmPassword('123', '123');
    });

    //then
    expect(result.current.passwordConfirm?.isValid).toBe(true);
  });

  it('비밀번호, 비밀번호 확인 불일치 ❌', async () => {
    //given
    const { result } = renderHook(() => useFormValidation(), {
      wrapper: makeWrapper,
    });

    //when
    act(() => {
      result.current.confirmPassword('123', '12');
    });

    //then
    expect(result.current.passwordConfirm?.isValid).toBe(false);
  });

  it('이름 유효성 검사 통과 ✅', async () => {
    //given
    const { result } = renderHook(() => useFormValidation(), {
      wrapper: makeWrapper,
    });

    //when
    act(() => {
      result.current.validateNickname('유승윤');
    });

    //then
    expect(result.current.nicknameValid?.isValid).toBe(true);
  });

  it('이름 유효성 검사 불통과 ❌', async () => {
    //given
    const { result } = renderHook(() => useFormValidation(), {
      wrapper: makeWrapper,
    });

    //when
    act(() => {
      result.current.validateNickname('f');
    });

    //then
    expect(result.current.nicknameValid?.isValid).toBe(false);
  });

  it('전화번호 유효성 검사 통과 ✅', async () => {
    //given
    const { result } = renderHook(() => useFormValidation(), {
      wrapper: makeWrapper,
    });

    //when
    act(() => {
      result.current.validatePhoneNum('01077777777');
    });

    //then
    expect(result.current.phoneNumValid?.isValid).toBe(true);
  });

  it('전화번호 유효성 검사 불통과 ❌', async () => {
    //given
    const { result } = renderHook(() => useFormValidation(), {
      wrapper: makeWrapper,
    });

    //when
    act(() => {
      result.current.validatePhoneNum('fff');
    });

    //then
    expect(result.current.phoneNumValid?.isValid).toBe(false);
  });

  it('생년월일 유효성 검사 통과 ✅', async () => {
    //given
    const { result } = renderHook(() => useFormValidation(), {
      wrapper: makeWrapper,
    });

    //when
    act(() => {
      result.current.validateBirth('980629');
    });

    //then
    expect(result.current.birthValid?.isValid).toBe(true);
  });

  it('생년월일 유효성 검사 불통과 ❌', async () => {
    //given
    const { result } = renderHook(() => useFormValidation(), {
      wrapper: makeWrapper,
    });

    //when
    act(() => {
      result.current.validateBirth('fff');
    });

    //then
    expect(result.current.birthValid?.isValid).toBe(false);
  });

  it('이메일 유효성 검사 통과 ✅', async () => {
    //given
    const { result } = renderHook(() => useFormValidation(), {
      wrapper: makeWrapper,
    });

    //when
    act(() => {
      result.current.validateEmail('test@naver.com');
    });

    //then
    expect(result.current.emailValid?.isValid).toBe(true);
  });

  it('이메일 유효성 검사 불통과 ❌', async () => {
    //given
    const { result } = renderHook(() => useFormValidation(), {
      wrapper: makeWrapper,
    });

    //when
    act(() => {
      result.current.validateEmail('tes.com');
    });

    //then
    expect(result.current.emailValid?.isValid).toBe(false);
  });

  it('모든 유효성 검사 통과 ✅', async () => {
    //given
    const { result } = renderHook(() => useFormValidation(), {
      wrapper: makeWrapper,
    });

    //when
    await act(async () => {
      await result.current.validLoginIdDuplicate('testuser');
      result.current.validatePassword('!@#WkdWKDWKD123');
      result.current.confirmPassword('123', '123');
      result.current.validateEmail('test@naver.com');
      result.current.validateNickname('유승윤');
      result.current.validatePhoneNum('01077777777');
      result.current.validateBirth('980629');
    });

    //then
    expect(result.current.finalConfirm()).toBe(true);
  });

  it('모든 유효성 검사 불통과 ❌', async () => {
    //given
    const { result } = renderHook(() => useFormValidation(), {
      wrapper: makeWrapper,
    });

    //when
    await act(async () => {
      await result.current.validLoginIdDuplicate('testuser');
      result.current.validatePassword('!@#WkdWKDWKD123');
      result.current.confirmPassword('123', '123');
      result.current.validateEmail('test@naver.com');
      result.current.validateNickname('유승윤');
      result.current.validatePhoneNum('01077777777');
      result.current.validateBirth('980ㄹ');
    });

    //then
    expect(result.current.finalConfirm()).toBe(false);
  });

  function makeWrapper({ children }: { children: React.ReactNode }) {
    return withAllContext(children);
  }
});
