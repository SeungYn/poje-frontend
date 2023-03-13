import { useNoteContext } from '@src/context/NoteContext';
import styled from 'styled-components';

export default function NoteContent() {
  const { selectedNote, handleDeleteSelectedNote } = useNoteContext();
  if (!selectedNote) return <></>;
  return (
    <Container>
      <Header></Header>
    </Container>
  );
}

const Container = styled.article`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header``;

const goBackBtn = styled.button``;
