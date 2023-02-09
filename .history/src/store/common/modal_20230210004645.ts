import { atom } from 'recoil';

export const isOpenCommonModal = atom<boolean>({
  key: 'isOpenCommonModal',
  default: false,
});
