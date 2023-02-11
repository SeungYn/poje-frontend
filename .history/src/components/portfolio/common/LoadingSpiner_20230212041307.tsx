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
  background: #9898983f;
`;

const LoadingSpin = styled.div`
  width: 4rem;
  height: 4rem;
  border: 10px solid #9a98983d;
  border-radius: 50%;
`;

const Text = styled.p``;
