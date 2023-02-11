import styled from 'styled-components';

export default function LoadingSpiner({ text }: { text: string }) {
  return (
    <Container>
      <loadingSpin />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 20;
`;

const loadingSpin = styled.div`
  width: ${({ theme }) => theme.fontLargeSize};
  height: 2rem;
  background: white;
`;

const Text = styled.p``;
