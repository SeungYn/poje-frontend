import styled from 'styled-components';

export default function PasswordFindModal() {
  return (
    <PasswordContainer>
      <PwFindForm>
        <Title>비밀번호 찾기</Title>
        <Item>
          <Label>이름</Label>
          <InputText type='text' />
        </Item>
        <Item>
          <Label>이메일</Label>
          <InputText type='text' />
        </Item>
      </PwFindForm>
    </PasswordContainer>
  );
}

const PasswordContainer = styled.div`
  position: fixed;
  z-index: 10000;
  inset: 0 0 0 0;
  background: ${({ theme }) => theme.modalBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PwFindForm = styled.form`
  position: relative;
  width: 50%;
  max-width: 480px;
  background: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontLargeSize};
`;

const InputText = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  font-size: ${({ theme }) => theme.fontMiddleSize};
  outline: none;
`;

const Item = styled.div`
  width: 100%;
`;

const Label = styled.label``;

const BtnGroup = styled.div``;
