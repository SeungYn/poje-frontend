import { SkeletionContainer } from '@src/styles/skeletion';
import styled from 'styled-components';

export default function SkillSkeleton() {
  return <Container></Container>;
}

const Container = styled(SkeletionContainer)`
  background: ${({ theme }) => theme.colorPink};
`;

const EmptyDiv1 = styled(EmptyDiv)`
  width: 20%;
  height: 50px;
  border-radius: 1rem;
`;
