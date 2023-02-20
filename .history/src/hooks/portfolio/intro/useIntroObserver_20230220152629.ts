import { isDisapperIntro } from '@src/store/portfolio/header';
import { useRecoilState } from 'recoil';

export default function useIntroObserver() {
  const [] = useRecoilState(isDisapperIntro);
  return 1;
}
