import { useNoteContext } from '@src/context/NoteContext';
import { useGetNoteList } from '@src/hooks/note';
import { timeFormat } from '@src/util/common';
import styled from 'styled-components';

export default function NoteList() {
  const noteList = useGetNoteList();
  const { selectedNote, handleClickNote } = useNoteContext();
  
  if (selectedNote) return <></>;
  console.log(noteList);
  return (
    <Container>
      <Title>쪽지함</Title>
      <NoteListUl>
        {noteList.map((item) => (
          <Note
            key={item.sendTime}
            onClick={(e) => {
              e.stopPropagation();
              handleClickNote(item);
            }}
          >
            <NoteHeader>
              <NoteSender>{item.opponentNickName}</NoteSender>
              <NoteDate>{timeFormat(item.sendTime)}</NoteDate>
            </NoteHeader>
          </Note>
        ))}
      </NoteListUl>
    </Container>
  );
}

const Container = styled.article`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  padding: 0.8rem;
  text-align: center;
`;

const NoteListUl = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  min-height: 0;
  overflow: auto;
`;

const Note = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid black;
  cursor: pointer;
`;

const NoteHeader = styled.div`
  display:flex;
  justify-content: space-between;
`;

const NoteSender = styled.span`
  font-weight: bold;
`;

const NoteDate = styled.span``;

const NoteMessage = styled.p``;