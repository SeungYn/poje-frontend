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
      <InputForm>
        <InputText type='text' />
        <SendBtn>보내기</SendBtn>
      </InputForm>
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
  display: flex;
  align-items: center;
  padding: 0.8rem;
`;

const Title = styled.h2`
  margin: 0 auto;
`;

const NoteListUl = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0 0.8rem;
  min-height: 0;
  overflow: auto;
`;

const Note = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid black;
`;

const InputForm = styled.form`
  display: flex;
  padding: 0.8rem;
`;

const InputText = styled.input`
  width: 100%;
  border-radius: 2rem;
  outline: none;
  border: 2px solid ${({ theme }) => theme.textColor};
`;

const SendBtn = styled.button``;
