import styled from 'styled-components';

export default function PasswordModifyPage() {
  return (
    <PwModifyPageContainer>
      <Item>
        <CommonInput />
      </Item>
    </PwModifyPageContainer>
  );
}

const PwModifyPageContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`;

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
