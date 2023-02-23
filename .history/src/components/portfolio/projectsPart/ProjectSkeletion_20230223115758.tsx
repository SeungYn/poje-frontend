import { EmptyDiv, SkeletionContainer } from '@src/styles/skeletion';
import styled from 'styled-components';

export default function ProjectSkeletion() {
  return <Container></Container>;
}

const Container = styled(SkeletionContainer)`
  background: ${({ theme }) => theme.colorPink};
  height: auto;
  display: flex;
  flex-direction: column;
`;

const EmptyDiv = styled(EmptyDiv)`
  width: 50%;
`;
