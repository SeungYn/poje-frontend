import { useNavigate } from 'react-router-dom';
import service from '@src/service';
import { JoinRequest, LoginRequest } from '@src/service/types/auth';
import { useMutation } from '@tanstack/react-query';
import useUser from './useUser';
import { useCookies } from 'react-cookie';
import useModal from '../common/useModal';

export default function useAuth() {
  const navigate = useNavigate();
  const [, setCookie] = useCookies();
  const { clearUser, setUser } = useUser();
  const {setModal } = useModal();

  const login = useMutation(
    (data: LoginRequest) => {
      console.log(data);
      return service.auth.login(data);
    },
    {
     
      onSuccess: (data) => {
        console.log(data);
        const token = data.headers.authorization.split(' ')[1];
        console.log(data.headers);
        console.log(data.headers.refreshtoken, 'refresh');
        //일주일 동안 모든 경로에서 쿠키 접근가능
        setCookie('refreshToken', data.headers.refreshtoken, {
          maxAge: 60 * 60 * 24 * 7,
          path: '/',
        });
        setUser(token);
        
        navigate('/');
      },
      onError: (err) => {
        setModal(err.message)
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
