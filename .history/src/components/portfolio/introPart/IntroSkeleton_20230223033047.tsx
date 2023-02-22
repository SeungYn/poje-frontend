import styled, { keyframes } from 'styled-components';

export default function IntroSkeleton() {
  return (
    <Container>
      <EmptyDiv1>
        <ShimmerContainer>
          <Shimmer></Shimmer>
        </ShimmerContainer>
      </EmptyDiv1>
      <EmptyDiv2></EmptyDiv2>
    </Container>
  );
}

const Container = styled.div`
  padding: 8rem 4rem;
  background: black;
`;

const EmptyDiv1 = styled.div`
  width: 100%;
  height: 50px;
  background: #ddd;
  margin: 0 auto;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
`;

const EmptyDiv2 = styled.div`
  width: 80%;
  height: 100px;
  background: #ddd;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 1rem;
`;

const ShimmerAni = keyframes`
	0% {
		transform: translateX(-150%);
	}
	50% {
		transform: translateX(-60%);
	}
	100% {
		transform: translate(150%);
	}`;

const ShimmerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${ShimmerAni} 3s infinite;
`;

const Shimmer = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgb(98, 98, 98);
  box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
`;
