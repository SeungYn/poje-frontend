import { atom } from 'recoil';

const commonLoadingState = atom<boolean>({
  key: 'commonLoadingState',
  default: false,
});
