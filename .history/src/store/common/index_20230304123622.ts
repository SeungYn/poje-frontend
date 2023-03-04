import { atom } from 'recoil';

export const commonLoadingState = atom<boolean>({
  key: 'commonLoadingState',
  default: false,
});
