import {
  confirmModalCallback,
  confirmModalContent,
  isOpenConfirmModal,
} from '@src/store/common/ConfirmModal';
import { useRecoilState } from 'recoil';

export default function useConfirmModal() {
  const [isOpen, setIsOpen] = useRecoilState(isOpenConfirmModal);
  const [modalContent, setModalContent] = useRecoilState(confirmModalContent);
  const [callback, setCallback] = useRecoilState(confirmModalCallback);

  const setConfirmModal = (message: string, callbackFn: () => void) => {
    setIsOpen(true);
    setModalContent({ message });
    setCallback({ fn: callbackFn });
  };
  const closeModal = () => {
    setIsOpen(false);
    setModalContent({ message: '' });
    callback.fn();
    setCallback({ fn: () => {} });
  };

  return { isOpen, setConfirmModal, closeModal, modalContent };
}
