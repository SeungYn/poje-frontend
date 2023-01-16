import { MdNavigateBefore } from 'react-icons/md';
import styled from 'styled-components';

interface BeforeButtonType {
  color: string;
}
export default function BeforeBtn({ color }: BeforeButtonType) {
  return (
    <BeforeButton>
      <MdNavigateBefore className='icon' />
    </BeforeButton>
  );
}

const BeforeButton = styled.button`
  position: absolute;
  left: 0.6rem;
  top: 0.6rem;
  color: ${({ theme }) => theme.mainColorDark};

  .icon {
    font-size: ${({ theme }) => theme.iconSize};
  }
`;
