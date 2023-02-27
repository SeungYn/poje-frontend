import Shimmer from '@src/components/common/Shimmer';
import { EmptyDiv, SkeletionContainer } from '@src/styles/skeletion';
import { breakPoint } from '@src/styledComponents/media';
import styled from 'styled-components';

export default function SkillSkeleton() {
  return (
    <Container>
      <MiddleContainer>
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
      </MiddleContainer>
    </Container>
  );
}

const Container = styled(SkeletionContainer)`
  background: ${({ theme }) => theme.colorPink};
  height: auto;
  display: flex;
  flex-direction: column;
  z-index: 7000;
`;

const MiddleContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 1rem;

  @media screen and (max-width: ${breakPoint.mmm}) {
  }
`;

const EmptyDiv1 = styled(EmptyDiv)`
  width: 200px;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  margin: none;

  @media screen and (min-width: ${breakPoint.m}) {
    width: 300px;
  }
`;

