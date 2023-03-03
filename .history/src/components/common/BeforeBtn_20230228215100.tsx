import { MdNavigateBefore } from 'react-icons/md';
import styled from 'styled-components';

interface BeforeButtonType {

  onClick: () => void;
}
export default function BeforeBtn({  onClick }: BeforeButtonType) {
  return (
    <Button onClick={onClick} >
      <MdNavigateBefore className='icon' />
    </Button>
  );
}

const Button = styled.button`
  
  color: ${({ theme }) => theme.textColor};

  .icon {
    font-size: ${({ theme }) => theme.iconSize};
  }
`;
