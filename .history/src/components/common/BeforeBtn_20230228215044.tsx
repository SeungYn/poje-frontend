import { MdNavigateBefore } from 'react-icons/md';
import styled from 'styled-components';

interface BeforeButtonType {
  color: string;
  onClick: () => void;
}
export default function BeforeBtn({ color, onClick }: BeforeButtonType) {
  return (
    <Button onClick={onClick} color={color}>
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
