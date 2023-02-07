import { useNavigate } from 'react-router-dom';
import LocalStorage from '@src/db/localStorage';
import service from '@src/service';
import { JoinRequest, LoginRequest } from '@src/service/types/auth';
import { useMutation } from '@tanstack/react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { accessTokenState } from '@src/store/auth/auth';
import { useState } from 'react';

type LoginIdDuplicateType = {
  message: string;
  isValid: boolean;
};

export default function useAuth() {
  const navigate = useNavigate();
  const setAccessToken = useSetRecoilState(accessTokenState);
  const [loginIdDuplicate, setLoginIdDuplicate] = useState<
    LoginIdDuplicateType | undefined
  >(undefined);

  const login = useMutation(
    (data: LoginRequest) => {
      console.log(data);
      return service.auth.login(data);
    },
    {
      onSuccess: (data) => {
        console.log(data);
        const token = data.headers.authorization.split(' ')[1];
        setAccessToken(token);
        navigate('/');
      },
      onError: (err) => {
        console.log(err);
        console.log(123);
      },
    }
  );

  const join = useMutation(
    (data: JoinRequest) => {
      return service.auth.join(data);
    },
    {
      onSuccess: (data) => {
        navigate('/auth/login');
      },
    }
  );

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
  return {
    login: login.mutate,
    join: join.mutate,
    validLoginIdDuplicate: validLoginIdDuplicate.mutate,
    loginIdDuplicate,
  };
}
