import styled from 'styled-components';

export default function ModifyComfirmCancleBtn() {
  return <CommomButton type='submit'>확인</CommomButton>;
}
const CommomButton = styled.button`
  font-size: ${({ theme }) => theme.fontRegular};
  padding: 0.8rem 1rem;
  background: white;
  border-radius: 2rem;
  border: 1px solid black;
`;
