import { useCallback } from 'react';
import { commonModalContent, isOpenCommonModal } from '@src/store/common/modal';
import { useRecoilState } from 'recoil';

export default function useModal() {
  const [isOpen, setIsOpen] = useRecoilState(isOpenCommonModal);
  const [modalContent, setModalContent] = useRecoilState(commonModalContent);
  const setModal = useCallback((message: string) => {
    setIsOpen(true);
    setModalContent({ message });
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalContent({ message: '' });
  }, []);
  return { isOpen, setIsOpen, modalContent, setModalContent };
}
