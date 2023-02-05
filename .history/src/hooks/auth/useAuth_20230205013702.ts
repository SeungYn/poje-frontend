import { useNavigate } from 'react-router-dom';
import LocalStorage from '@src/db/localStorage';
import service from '@src/service';
import { JoinRequest, LoginRequest } from '@src/service/types/auth';
import { useMutation } from '@tanstack/react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { accessTokenState } from '@src/store/auth/auth';

export default function useAuth() {
  const navigate = useNavigate();
  const setAccessToken = useSetRecoilState(accessTokenState);
  const login = useMutation(
    (data: LoginRequest) => {
      console.log(data);
      return service.auth.login(data);
    },
    {
      onSuccess: (data) => {
        const token = data.headers.authorization.split(' ')[1];
        setAccessToken(token);
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
    ({
      loginId,
      callbackError,
    }: {
      loginId: string;
      callbackError: () => void;
    }) => {
      return service.auth.loginIdDuplicate({ loginId });
    },
    {
      onSuccess: () => {},
      onError: (e{ callbackError }) => {
        callbackError();
      },
    }
  );
  return { login: login.mutate, join: join.mutate };
}
