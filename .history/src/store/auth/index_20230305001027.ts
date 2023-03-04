import { atom } from 'recoil';

const pwFindModalState = atom<boolean>({
  key: 'pwFindModalState',
  default: false,
});
