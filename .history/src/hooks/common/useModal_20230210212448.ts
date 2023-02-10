import { useCallback } from 'react';
import {
  commonModalCallbak,
  commonModalContent,
  isOpenCommonModal,
} from '@src/store/common/modal';
import { useRecoilState } from 'recoil';

export default function useModal() {
  const [isOpen, setIsOpen] = useRecoilState(isOpenCommonModal);
  const [modalContent, setModalContent] = useRecoilState(commonModalContent);
  const [callback, setCallback] = useRecoilState(commonModalCallbak);
  const setModal = useCallback(
    (message: string, callbackFn: () => void = () => {}) => {
      setIsOpen(true);
      setModalContent({ message });
      setCallback((e) => ({
        callback: callbackFn,
      }));
    },
    []
  );

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalContent({ message: '' });
    setCallback({ callback: () => {} });
  }, []);
  return { isOpen, setModal, closeModal, modalContent };
}
