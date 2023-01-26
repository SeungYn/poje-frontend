import styled from 'styled-components';

interface ModifyBtnType {
  isModifyMode: boolean;
  handleSubmit?: () => void;
  handleCancle?: () => void;
  handleModifyMode?: () => void;
}

export default function ModifyBtn({ isModifyMode }: ModifyBtnType) {
  return (
    <Container>
      <ModifyButton>수정</ModifyButton>
      <ComfirmButton>확인</ComfirmButton>
      <CancleButton>취소</CancleButton>
    </Container>
  );
}

const Container = styled.article`
  position: absolute;
`;

const ModifyButton = styled.button``;

const ComfirmButton = styled.button``;

const CancleButton = styled.button``;
