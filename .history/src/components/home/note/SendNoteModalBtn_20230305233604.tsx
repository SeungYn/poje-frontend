import { IoMailOutline } from 'react-icons/io5';
import styled from 'styled-components';

export default function SendNoteModalBtn() {
  return (
    <Button>
      <IoMailOutline className='icon' />
    </Button>
  );
}

const Button = styled.button``;
