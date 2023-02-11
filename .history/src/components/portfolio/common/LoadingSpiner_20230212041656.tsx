import styled, { keyframes } from 'styled-components';

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

const rotateAnimation = keyframes`
	0%{
		transform: rotate(0deg);
	}
	100%{
		transform: rotate(360deg);
	}
`;

const LoadingSpin = styled.div`
  width: 4rem;
  height: 4rem;
  border: 10px solid #9a9898;
  border-top: 10px solid white;
  border-radius: 50%;
  animation: ${rotateAnimation} 1.3s linear infinite;
`;

const Text = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.fontLargeSize};
`;
