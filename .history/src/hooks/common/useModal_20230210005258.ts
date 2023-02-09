import { commonModalContent, isOpenCommonModal } from '@src/store/common/modal';
import { useRecoilState } from 'recoil';

export default function useModal() {
  const [isOpen, setIsOpen] = useRecoilState(isOpenCommonModal);
  const [modalContent, setModalContent] = useRecoilState(commonModalContent);
  return { isOpen, setIsOpen, modalContent, setModalContent };
}
