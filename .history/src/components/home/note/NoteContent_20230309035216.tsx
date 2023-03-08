import { useNoteContext } from '@src/context/NoteContext';
import BeforeBtn from '@src/components/common/BeforeBtn';
import styled from 'styled-components';
import NoteItem from './NoteItem';
import { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { useGetNoteCentent, useSendNote } from '@src/hooks/note';

export default function NoteContent() {
  const { selectedNote, handleDeleteSelectedNote } = useNoteContext();
  const [inputMessage, setInputMessage] = useState('');
  const noteList = useGetNoteCentent(selectedNote?.oppenentEmail);
  const onSendNote = useSendNote();

  if (!selectedNote) return <></>;
  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        console.log(selectedNote.oppenentEmail);
        onSendNote({
          email: selectedNote.oppenentEmail,
          message: inputMessage,
        });
        setInputMessage('');
      }}
    >
      <Header>
        <BeforeBtn
          onClick={(e) => {
            e?.stopPropagation();
            handleDeleteSelectedNote();
          }}
        />
        <Title>{selectedNote.opponentNickName}</Title>
      </Header>
      <NoteListUl>
        {noteList.map((item) => (
          <NoteItem key={item.sendTime} {...item} />
        ))}
      </NoteListUl>
      <InputForm>
        <InputText
          type='text'
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <SendBtn>
          <AiOutlineSend className='icon' />
        </SendBtn>
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

const InputForm = styled.form`
  display: flex;
  align-items: center;
  padding: 0.8rem;
`;

const InputText = styled.input`
  width: 100%;
  border-radius: 2rem;
  outline: none;
  border: 2px solid ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.fontRegular};
  padding: 0.4rem 0.8rem;
`;

const SendBtn = styled.button`
  display: flex;
  align-items: center;
  .icon {
    font-size: 2rem;
  }
`;
