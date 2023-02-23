import { EmptyDiv, SkeletionContainer } from '@src/styles/skeletion';
import styled from 'styled-components';

export default function ProjectSkeletion() {
  return (
    <Container>
      <EmptyDiv1></EmptyDiv1>
    </Container>
  );
}

const Container = styled(SkeletionContainer)`
  background: ${({ theme }) => theme.colorPink};
  height: auto;
  display: flex;
  flex-direction: column;
`;

const EmptyDiv1 = styled(EmptyDiv)`
  width: 50%;
  height: 100px;
`;
