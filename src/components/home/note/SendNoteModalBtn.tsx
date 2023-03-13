import { isOpenSendNoteModal } from '@src/store/note';
import { IoMailOutline } from 'react-icons/io5';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

export default function SendNoteModalBtn() {
  const setIsOpenSendNoteModal = useSetRecoilState(isOpenSendNoteModal);
  return (
    <Button onClick={() => setIsOpenSendNoteModal(true)}>
      <IoMailOutline className='icon' />
    </Button>
  );
}

const Button = styled.button`
  font-size: 2rem;
  display: flex;
  align-items: center;
`;
