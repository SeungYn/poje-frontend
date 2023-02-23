import { SkeletionContainer } from '@src/styles/skeletion';
import styled from 'styled-components';

export default function SkillSkeleton() {
  return <div></div>;
}

const Container = styled(SkeletionContainer)`
  background: ${({ theme }) => theme.colorPink};
`;
