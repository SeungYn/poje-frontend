import Shimmer from '@src/components/common/Shimmer';
import { EmptyDiv, SkeletionContainer } from '@src/styles/skeletion';
import styled from 'styled-components';

export default function SkillSkeleton() {
  return (
    <Container>
      <EmptyDiv1>
        <Shimmer />
      </EmptyDiv1>
      <EmptyDiv1>
        <Shimmer />
      </EmptyDiv1>
      <EmptyDiv1>
        <Shimmer />
      </EmptyDiv1>
      <EmptyDiv1>
        <Shimmer />
      </EmptyDiv1>
      <EmptyDiv1>
        <Shimmer />
      </EmptyDiv1>
    </Container>
  );
}

const Container = styled(SkeletionContainer)`
  background: ${({ theme }) => theme.colorPink};
  display: flex;
`;

const EmptyDiv1 = styled(EmptyDiv)`
  width: 20%;
  height: 100px;
  border-radius: 1rem;
  margin: none;
`;
