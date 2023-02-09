import { accessTokenState } from '@src/store/auth/auth';
import { useRecoilValue } from 'recoil';

export default function useUser() {
  const user = useRecoilValue(accessTokenState);
  return { user };
}
