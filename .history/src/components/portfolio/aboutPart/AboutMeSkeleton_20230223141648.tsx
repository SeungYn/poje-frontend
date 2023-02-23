import Shimmer from '@src/components/common/Shimmer';
import { EmptyDiv, SkeletionContainer } from '@src/styles/skeletion';
import styled from 'styled-components';

export default function AboutMeSkeleton() {
  return (
    <Container>
      <EmptyDiv2>
        <Shimmer />
      </EmptyDiv2>
    </Container>
  );
}

const Container = styled(SkeletionContainer)`
  background: white;
`;
const EmptyDiv1 = styled(EmptyDiv)`
  width: 100%;
  height: 50px;
  border-radius: 1rem;
`;

const EmptyDiv2 = styled(EmptyDiv)`
  width: 80%;
  height: 200px;
  margin-top: 40px;
`;
