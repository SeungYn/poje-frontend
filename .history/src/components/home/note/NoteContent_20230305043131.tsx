import { useNoteContext } from '@src/context/NoteContext';
import BeforeBtn from '@src/components/common/BeforeBtn';
import styled from 'styled-components';
import { NoteType } from '@src/service/types/member';
import NoteItem from './NoteItem';
import { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

export default function NoteContent() {
  const { selectedNote, handleDeleteSelectedNote, handleReplyNote } =
    useNoteContext();
  const [inputMessage, setInputMessage] = useState('');
  const data: NoteType[] = [
    {
      id: 34,
      message: '누구세요???',
      sender: '싸르',
      sendStatus: 'RECEIVE',
      sendTime: '2023-02-23T01:50:11.093062',
    },
    {
      id: 34,
      message: '누구세요???',
      sender: '싸르',
      sendStatus: 'RECEIVE',
      sendTime: '2023-02-23T01:50:11.093062',
    },
    {
      id: 34,
      message:
        '누구fawefweafwaefwaefweafwefwefweafwaefweafweafwaefwefwaefwae세요???',
      sender: '싸르',
      sendStatus: 'RECEIVE',
      sendTime: '2023-02-23T01:50:11.093062',
    },
  ];

  if (!selectedNote) return <></>;
  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        handleReplyNote(inputMessage);
        setInputMessage('');
      }}
    >
      <Header>
        <BeforeBtn
          onClick={() => {
            handleDeleteSelectedNote();
          }}
        />
        <Title>{selectedNote.title}</Title>
      </Header>
      <NoteListUl>
        {data.map((item) => (
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
  .icon {
    font-size: 2rem;
  }
`;
