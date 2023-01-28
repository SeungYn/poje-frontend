import styled from 'styled-components';

interface ModifyBtnType {
  isModify: boolean;
  onSubmit?: () => {};
}

export default function ModifyBtn({ isModify }: ModifyBtnType) {
  return (
    <Container>
      <ModifyButton>수정하기</ModifyButton>
    </Container>
  );
}

const Container = styled.article`
  position: absolute;
`;

const ModifyButton = styled.button``;

const ComfirmButton = styled.button``;

const CancleButton = styled.button``;
