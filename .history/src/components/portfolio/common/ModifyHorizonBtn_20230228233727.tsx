import styled from 'styled-components';

type PropType = {
  title: string;
  handleClick: () => void;
};

export default function ModifyHorizonBtn({ title, handleClick }: PropType) {
  return (
    <Horizon>
      <ModifyButton onClick={handleClick}>{title}</ModifyButton>
    </Horizon>
  );
}

const Horizon = styled.div`
  width: 100%;
  bottom: 10px;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    background: white;
  }
`;

const ModifyButton = styled.button`
  z-index: 100;
  color: ${({ theme }) => theme.colorPink};
  font-size: ${({ theme }) => theme.fontRegular};
  padding: 0.6rem;
  background: white;
  border-radius: 3rem;
`;
