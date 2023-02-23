import Shimmer from '@src/components/common/Shimmer';
import { EmptyDiv } from '@src/styles/skeletion';
import styled from 'styled-components';

export default function AboutMeSkeleton() {
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 8rem 4rem;
  background: black;
`;
const EmptyDiv1 = styled(EmptyDiv)`
  width: 100%;
  height: 50px;
  border-radius: 1rem;
`;

const EmptyDiv2 = styled(EmptyDiv)`
  width: 80%;
  height: 100px;
  margin-top: 40px;
`;
