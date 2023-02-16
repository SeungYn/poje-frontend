import { atom } from 'recoil';

export const isOpenCommonModal = atom<boolean>({
  key: 'isOpenConfirmModal',
  default: true,
});
