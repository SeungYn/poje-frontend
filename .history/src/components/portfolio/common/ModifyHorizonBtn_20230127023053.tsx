import styled from 'styled-components';

export default function ModifyHorizonBtn() {
  return (
    <ModifyHorizonButton>
      <ModifyButton>수정</ModifyButton>
    </ModifyHorizonButton>
  );
}

const ModifyHorizonButton = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10px;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    background: rgb(220, 219, 219);
  }
`;

const ModifyButton = styled.button`
  z-index: 100;
  font-size: ${({ theme }) => theme.fontLargeSize};
  padding: 1rem;
  background: rgb(220, 219, 219);
  border-radius: 2rem;
`;
