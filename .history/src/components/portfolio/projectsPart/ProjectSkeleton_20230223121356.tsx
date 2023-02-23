import { EmptyDiv, SkeletionContainer } from '@src/styles/skeletion';
import styled from 'styled-components';

export default function ProjectSkeleton() {
  return (
    <Container>
      <EmptyDiv1></EmptyDiv1>
      <EmptyDiv2></EmptyDiv2>
    </Container>
  );
}

const Container = styled(SkeletionContainer)`
  background: ${({ theme }) => theme.mainColorLight};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const EmptyDiv1 = styled(EmptyDiv)`
  width: 50%;
  height: 100px;
`;

const EmptyDiv2 = styled(EmptyDiv)`
  width: 100%;
  max-width: 1600px;
  height: 300px;
  margin-top: 2rem;
`;
