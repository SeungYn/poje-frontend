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

const InputForm = styled.form`
  display: flex;
`;

const InputText = styled.input`
  width: 100%;
  border-radius: 1rem;
  outline: none;
`;

const SendBtn = styled.button``;
