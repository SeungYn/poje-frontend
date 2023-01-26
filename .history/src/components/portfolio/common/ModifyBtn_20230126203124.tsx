import styled from 'styled-components';

interface ModifyBtnType {
  isModifyMode: boolean;
  handleSubmit?: () => void;
  handleCancle?: () => void;
  handleModifyMode?: () => void;
}

export default function ModifyBtn({
  isModifyMode,
  handleModifyMode,
}: ModifyBtnType) {
  return (
    <Container>
      {!isModifyMode && (
        <ModifyButton onClick={handleModifyMode}>수정</ModifyButton>
      )}
      {isModifyMode && (
        <>
          <ComfirmButton>확인</ComfirmButton>
          <CancleButton onClick={handleModifyMode}>취소</CancleButton>
        </>
      )}
    </Container>
  );
}

const Container = styled.article`
  position: absolute;
  bottom: 1rem;
`;

const ModifyButton = styled.button``;

const ComfirmButton = styled.button``;

const CancleButton = styled.button``;
