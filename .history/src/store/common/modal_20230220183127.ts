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
    message: '안녕하세요',
  },
});

export const commonModalCallbak = atom<{ fn: () => void }>({
  key: 'commonModalCallback',
  default: { fn: () => {} },
});
