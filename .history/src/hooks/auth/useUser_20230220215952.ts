import { accessTokenState } from '@src/store/auth/auth';
import { useRecoilValue, useRecoilState, useResetRecoilState } from 'recoil';

export default function useUser() {
  const [user, setUser] = useRecoilState(accessTokenState);
  const resetUser = useResetRecoilState(accessTokenState);
  const clearUser = () => {
    console.log('reset!!!');
    resetUser();
  };

  return { user, clearUser, setUser };
}
