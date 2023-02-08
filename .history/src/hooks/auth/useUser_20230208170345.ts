import { accessTokenState } from '@src/store/auth/auth';
import { useRecoilValue, useRecoilState } from 'recoil';

export default function useUser() {
  const [user, setUser] = useRecoilState(accessTokenState);

  const clearUser = () => {
    setUser();
  };

  return { user, clearUser, setUser };
}
