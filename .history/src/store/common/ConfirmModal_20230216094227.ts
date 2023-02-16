import { atom } from 'recoil';

export const isOpenConfirmModal = atom<boolean>({
  key: 'isOpenConfirmModal',
  default: true,
});

interface ConfirmModalContentType {
  message: string;
}

export const confirmModalContent = atom<ConfirmModalContentType>({
  key: 'confirmModalContent',
  default: {
    message: '안녕하세요',
  },
});

export const confirmModalCallback = atom<{ fn: () => void }>({
  key: 'confirmModalCallback',
  default: { fn: () => {} },
});
