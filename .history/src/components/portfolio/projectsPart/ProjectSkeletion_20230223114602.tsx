export default function ProjectSkeletion() {
  return <div></div>;
}

const Container = styled(SkeletionContainer)`
  background: ${({ theme }) => theme.colorPink};
  height: auto;
  display: flex;
  flex-direction: column;
`;
