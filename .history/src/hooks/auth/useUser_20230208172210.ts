import { accessTokenState } from '@src/store/auth/auth';
import { useRecoilValue, useRecoilState, useResetRecoilState } from 'recoil';

export default function useUser() {
  const [user, setUser] = useRecoilState(accessTokenState);
  const resetUser = useResetRecoilState(accessTokenState);
  const clearUser = () => {
    resetUser();
  };

  return { user, clearUser, setUser };
}
