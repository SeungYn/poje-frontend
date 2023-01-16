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

const Button = styled.button<{ color: string }>`
  position: absolute;
  left: 0.6rem;
  top: 0.6rem;
  color: ${(color) => color};

  .icon {
    font-size: ${({ theme }) => theme.iconSize};
  }
`;
