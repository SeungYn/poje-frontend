import styled from 'styled-components';

export default function LoadingSpiner({ text }: { text: string }) {
  return (
    <Container>
      <LoadingSpin />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingSpin = styled.div`
  width: ${({ theme }) => theme.fontLargeSize};
  height: ${({ theme }) => theme.fontLargeSize};
  background: white;
`;

const Text = styled.p``;
