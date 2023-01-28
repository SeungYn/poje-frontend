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
  bottom: 0;
  left: 0;
  &::before {
    content: '';
    z-index: 0;
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    background: rgb(220, 219, 219);
  }
`;

const ModifyButton = styled.button`
  z-index: 20;
  width: 100px;
  height: 100px;
`;
