import styled from 'styled-components';
export default function DeleteBtn({ callback }: { callback: () => void }) {
  return (
    <Container>
      <CommomButton onClick={callback} type='button'>
        삭제
      </CommomButton>
    </Container>
  );
}

const Container = styled.article`
  position: absolute;
  bottom: 1rem;
  left: 2rem;
`;

const CommomButton = styled.button`
  font-size: ${({ theme }) => theme.fontRegular};
  padding: 0.8rem 1rem;
  background: white;
  border-radius: 2rem;
  border: 1px solid black;
`;
