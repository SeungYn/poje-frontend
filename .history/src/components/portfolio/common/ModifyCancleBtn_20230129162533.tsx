import styled from 'styled-components';

export default function ModifyCancleBtn(onClick: () => void) {
  return <CommomButton onClick={onClick}>취소하다</CommomButton>;
}

const CommomButton = styled.button`
  font-size: ${({ theme }) => theme.fontRegular};
  padding: 0.8rem 1rem;
  background: white;
  border-radius: 2rem;
  border: 1px solid black;
`;
