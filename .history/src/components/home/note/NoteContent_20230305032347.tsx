import { useNoteContext } from '@src/context/NoteContext';
import BeforeBtn from '@src/components/common/BeforeBtn';
import styled from 'styled-components';

export default function NoteContent() {
  const { selectedNote, handleDeleteSelectedNote } = useNoteContext();
  if (!selectedNote) return <></>;
  return (
    <Container>
      <Header>
        <BeforeBtn
          onClick={() => {
            handleDeleteSelectedNote();
          }}
        />
        <Title>{selectedNote.title}</Title>
      </Header>
    </Container>
  );
}

const Container = styled.article`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.textColor};
`;

const Header = styled.header`
  position: relative;
  & > button {
    position: absolute;
    left: 10px;
  }
  display: flex;
`;

const goBackBtn = styled.button``;

const Title = styled.h2``;
