import { useNoteContext } from '@src/context/NoteContext';
import styled from 'styled-components';

export default function NoteContent() {
  const { handleClickNote, selectedPortfolioId } = useNoteContext();
  if (!selectedPortfolioId) return <></>;
  return <Container>123</Container>;
}

const Container = styled.article`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
