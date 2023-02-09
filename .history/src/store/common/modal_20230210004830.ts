import { atom } from 'recoil';

export const isOpenCommonModal = atom<boolean>({
  key: 'isOpenCommonModal',
  default: false,
});

interface commonModalContentType {
  message: string;
}

export const commonModalContent = atom<commonModalContentType>({
  key: 'commonModalContent',
  default: {
    message: '',
  },
});
