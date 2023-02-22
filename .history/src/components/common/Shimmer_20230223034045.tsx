import styled, { keyframes } from 'styled-components';

export default function Shimmer() {
  return (
    <ShimmerContainer>
      <Shimmer></Shimmer>
    </ShimmerContainer>
  );
}

const ShimmerAni = keyframes`
	0% {
		transform: translateX(-100%);
	}
	100% {
		transform: translateX(100%);
	}`;

const ShimmerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${ShimmerAni} 2.5s linear infinite;
`;

const Shimmer = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to right,
    #ddd,
    rgb(212, 212, 212),
    rgb(133, 133, 133),
    rgb(234, 234, 234),
    #ddd
  );
`;
