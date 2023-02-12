import { atom } from 'recoil';

export const aboutMeLoading = atom<boolean>({
  key: 'aboutMeLoading',
  default: false,
});
