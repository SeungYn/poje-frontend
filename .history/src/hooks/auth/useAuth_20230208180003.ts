import { useNavigate } from 'react-router-dom';
import LocalStorage from '@src/db/localStorage';
import service from '@src/service';
import { JoinRequest, LoginRequest } from '@src/service/types/auth';
import { useMutation } from '@tanstack/react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { accessTokenState } from '@src/store/auth/auth';
import { useState } from 'react';
import useUser from './useUser';

type LoginIdDuplicateType = {
  message: string;
  isValid: boolean;
};

export default function useAuth() {
  const navigate = useNavigate();
  const { clearUser, setUser } = useUser();

  const login = useMutation(
    (data: LoginRequest) => {
      console.log(data);
      return service.auth.login(data);
    },
    {
      onSuccess: (data) => {
        console.log(data);
        const token = data.headers.authorization.split(' ')[1];
        setUser(token);
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

  const logOut = useMutation(() => service.auth.logout(), {
    onSuccess: () => {
      console.log('logOut!!');
      clearUser();
    },
  });

  return {
    login: login.mutate,
    join: join.mutate,
    logOut: logOut.mutate,
  };
}
