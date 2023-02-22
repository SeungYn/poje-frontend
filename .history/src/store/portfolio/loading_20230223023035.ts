import { atom } from 'recoil';

export const aboutMeLoading = atom<boolean>({
  key: 'aboutMeLoading',
  default: false,
});

export const skillsLoading = atom<boolean>({
  key: 'skillsLoading',
  default: false,
});

export const introLoading = atom<boolean>({
  key: 'introLoading',
  default: false,
});
