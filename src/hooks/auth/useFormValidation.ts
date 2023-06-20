import { useMutation } from '@tanstack/react-query';
import { useState, useCallback } from 'react';
import service from '@src/service';

interface ValidType {
  message: string;
  isValid: boolean;
}

export default function useFormValidation() {
  const [loginIdDuplicate, setLoginIdDuplicate] = useState<
    ValidType | undefined
  >(undefined);
  const [passwordValid, setPasswordValid] = useState<ValidType | undefined>(
    undefined
  );
  const [emailValid, setEmailValid] = useState<ValidType | undefined>(
    undefined
  );
  const [passwordConfirm, setPasswordConfirm] = useState<ValidType | undefined>(
    undefined
  );
  const [nicknameValid, setNicknameValid] = useState<ValidType | undefined>(
    undefined
  );
  const [phoneNumValid, setPhoneNumValid] = useState<ValidType | undefined>(
    undefined
  );
  const [birthValid, setBirthValid] = useState<ValidType | undefined>(
    undefined
  );

  const validLoginIdDuplicate = useMutation(
    (loginId: string) => {
      return service.auth.loginIdDuplicate({ loginId });
    },
    {
      onSuccess: () => {
        setLoginIdDuplicate({ message: '사용가능한 아이디', isValid: true });
        return true;
      },
      onError: ({ callbackError }) => {
        setLoginIdDuplicate({ message: '사용불가능한 아이디', isValid: false });

        return false;
      },
    }
  );

  const validatePassword = useCallback((password: string) => {
    const reg = /(?=.*\d)(?=.*\W)(?=.*[a-zA-Z])(?=.*\S$).{8,20}/;

    return reg.test(password)
      ? setPasswordValid(makeValidObject('비밀번호가 사용가능합니다.', true))
      : setPasswordValid(
          makeValidObject(
            '비밀번호는 영문, 숫자, 특수기호가 적어도 1개 이상씩 포함된 8자 ~ 20자의 비밀번호여야 합니다.',
            false
          )
        );
  }, []);

  const validateEmail = useCallback((email: string) => {
    const reg = /(?=.*@)/;
    return !reg.test(email)
      ? setEmailValid(makeValidObject('이메일 형식에 맞게 입력해주세요', false))
      : setEmailValid(makeValidObject('이메일 형식에 맞습니다.', true));
  }, []);

  const confirmPassword = useCallback(
    (password: string, confirmTarget: string) => {
      password !== confirmTarget
        ? setPasswordConfirm(
            makeValidObject('비밀번호가 일치하지 않습니다..', false)
          )
        : setPasswordConfirm(makeValidObject('비밀번호가 일치..', true));
    },
    []
  );

  const validateNickname = useCallback((nickname: string) => {
    const reg = /^[ㄱ-ㅎ가-힣a-z0-9-_]{2,10}$/;

    return !reg.test(nickname)
      ? setNicknameValid(makeValidObject('이름입력 부탁', false))
      : setNicknameValid(makeValidObject('이름을 정확히 입력해주세요.', true));
  }, []);

  const validatePhoneNum = useCallback((num: string) => {
    const reg = /^010\d{8}/;
    return !reg.test(num)
      ? setPhoneNumValid(makeValidObject('숫자만 입력해주세요', false))
      : setPhoneNumValid(makeValidObject('정상적인 전화번호', true));
  }, []);

  const validateBirth = useCallback((birth: string) => {
    const reg = /^\d{6}/;
    return !reg.test(birth)
      ? setBirthValid(makeValidObject('6자리로 입력해주세요', false))
      : setBirthValid(makeValidObject('정상적인 생일', true));
  }, []);

  const finalConfirm = () => {
    return [
      loginIdDuplicate,
      passwordValid,
      emailValid,
      passwordConfirm,
      nicknameValid,
      phoneNumValid,
      birthValid,
    ].every((item) => item?.isValid);
  };

  return {
    loginIdDuplicate,
    validLoginIdDuplicate: validLoginIdDuplicate.mutate,
    validatePassword,
    passwordValid,
    emailValid,
    validateEmail,
    confirmPassword,
    passwordConfirm,
    validateNickname,
    nicknameValid,
    phoneNumValid,
    validatePhoneNum,
    birthValid,
    validateBirth,
    finalConfirm,
  };
}

function makeValidObject(message: string, isValid: boolean) {
  return { message, isValid };
}
