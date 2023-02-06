import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import service from '@src/service';

type LoginIdDuplicateType = {
  message: string;
  isValid: boolean;
};

type PasswordValidType = {
  message: string;
  isValid: boolean;
};

export default function useFormValidation() {
  const [loginIdDuplicate, setLoginIdDuplicate] = useState<
    LoginIdDuplicateType | undefined
		>(undefined);
		const [passwordValid, setPasswordValid] = useState<
    PasswordValidType | undefined
		>(undefined);

  const validLoginIdDuplicate = useMutation(
    ({ loginId }: { loginId: string }) => {
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

  const validatePassword = (password: string) => {
    const reg = /(?=.*\d)(?=.*\W)(?=.*[A-Z])(?=.*[a-z])(?=.*\S$).{8,20}/;
    return reg.test(password) : setPasswordValid(makeValidObject({message:}));
  };

  return {
    loginIdDuplicate,
    validLoginIdDuplicate: validLoginIdDuplicate.mutate,
    validatePassword,
  };
}


function makeValidObject( message: string, isValid: boolean ) {
	return { message, isValid };
}