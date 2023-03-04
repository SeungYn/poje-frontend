import { NoteType } from '@src/service/types/member';
import styled from 'styled-components';

export default function NoteItem(data: NoteType) {
  const { message, sender, sendStatus, sendTime } = data;
  return (
    <Note>
      <Header>
        <Status>{sendStatus === 'RECEIVE' ? '받은 쪽지' : '보낸 쪽지'}</Status>
      </Header>
    </Note>
  );
}

const Note = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid black;
`;

const Header = styled.header`
  display: flex;
`;

const Status = styled.span``;

const Person = styled.span``;

const Time = styled.span``;
