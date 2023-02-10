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
    (message: string, callback?: () => void = () => {}) => {
      setIsOpen(true);
      setModalContent({ message });
    },
    []
  );

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalContent({ message: '' });
  }, []);
  return { isOpen, setModal, closeModal, modalContent };
}
