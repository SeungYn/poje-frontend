import styled from 'styled-components';

export default function PasswordModifyPage() {
  return (
    <PwModifyPageContainer>
      <Item>
        <label>현재 비밀번호</label>
        <CommonInput />
      </Item>
    </PwModifyPageContainer>
  );
}

const PwModifyPageContainer = styled.form`
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`;

const Label = styled.label``;

const CommonInput = styled.input`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.6rem;
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  outline: none;
  width: 100%;
`;

const Item = styled.div``;
