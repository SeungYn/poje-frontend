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
  bottom: 2rem;
  right: 2rem;
`;

const CommomButton = styled.button`
  font-size: ${({ theme }) => theme.fontMiddleSize};
  padding: 0.8rem 1rem;
  background: white;
  border-radius: 2rem;
  border: 1px solid black;
`;

const ModifyButton = styled(CommomButton)``;

const ComfirmButton = styled(CommomButton)``;

const CancleButton = styled(CommomButton)`
  margin-left: 0.8rem;
`;
