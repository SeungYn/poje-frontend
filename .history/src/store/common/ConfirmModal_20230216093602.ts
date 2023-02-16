import { atom } from 'recoil';

export const isOpenCommonModal = atom<boolean>({
  key: 'isOpenConfirmModal',
  default: true,
});

interface ConfirmModalContentType {
  message: string;
}

export const ConfirmModalContent = atom<ConfirmModalContentType>({
  key: 'confirmModalContent',
  default: {
    message: '안녕하세요',
  },
});

export const commonModalCallback = atom<{ fn: () => void }>({
  key: 'confirmModalCallback',
  default: { fn: () => {} },
});
