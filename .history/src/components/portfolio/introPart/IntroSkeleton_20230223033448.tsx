import styled, { keyframes } from 'styled-components';

export default function IntroSkeleton() {
  return (
    <Container>
      <EmptyDiv1>
        <ShimmerContainer>
          <Shimmer></Shimmer>
        </ShimmerContainer>
      </EmptyDiv1>
      <EmptyDiv2>
        <ShimmerContainer>
          <Shimmer></Shimmer>
        </ShimmerContainer>
      </EmptyDiv2>
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
  overflow: hidden;
  position: relative;
`;

const ShimmerAni = keyframes`
	0% {
		transform: translateX(-150%);
	}
	50% {
		transform: translateX(-20%);
	}
	100% {
		transform: translateX(120%);
	}`;

const ShimmerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${ShimmerAni} 4s infinite;
`;

const Shimmer = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgb(212, 212, 212),
    rgb(133, 133, 133),
    rgb(234, 234, 234)
  );
`;
