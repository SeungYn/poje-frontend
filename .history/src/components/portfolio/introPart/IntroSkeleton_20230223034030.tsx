import Shimmer from '@src/components/common/Shimmer';
import styled, { keyframes } from 'styled-components';

export default function IntroSkeleton() {
  return (
    <Container>
      <EmptyDiv1>
        <Shimmer />
      </EmptyDiv1>
      <EmptyDiv2>
        <Shimmer />
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
