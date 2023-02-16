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
  const confirmModal = () => {
    callback.fn();
    setIsOpen(false);
    setModalContent({ message: '' });
    setCallback({ fn: () => {} });
  };

  const cancelModal = () => {
    setIsOpen(false);
    setModalContent({ message: '' });
    setCallback({ fn: () => {} });
  };

  return { isOpen, setConfirmModal, confirmModal, cancelModal, modalContent };
}
