import { atom } from 'recoil';

export const pwFindModalState = atom<boolean>({
  key: 'pwFindModalState',
  default: false,
});
