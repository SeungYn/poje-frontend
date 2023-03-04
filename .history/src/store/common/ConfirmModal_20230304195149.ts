import { atom } from 'recoil';

export const isOpenConfirmModal = atom<boolean>({
  key: 'isOpenConfirmModal',
  default: false,
});

interface ConfirmModalContentType {
  message: string;
}

export const confirmModalContent = atom<ConfirmModalContentType>({
  key: 'confirmModalContent',
  default: {
    message: '',
  },
});

export const confirmModalCallback = atom<{ fn: () => void }>({
  key: 'confirmModalCallback',
  default: { fn: () => {} },
});
