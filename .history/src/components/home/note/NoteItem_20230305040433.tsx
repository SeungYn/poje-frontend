import { NoteType } from '@src/service/types/member';
import styled from 'styled-components';

export default function NoteItem(data: NoteType) {
  const { message, sender, sendStatus, sendTime } = data;
  return (
    <Note>
      <Header>
        <Status status={sendStatus === 'RECEIVE'}>
          {sendStatus === 'RECEIVE' ? '받은 쪽지' : '보낸 쪽지'}
        </Status>
        <Person>{sendStatus === 'RECEIVE' ? sender : '나'}</Person>
        <Time>{sendTime}</Time>
      </Header>
      <Message>{message}</Message>
    </Note>
  );
}

const Note = styled.li`
  padding: 0.4rem 0;
  border-bottom: 1px solid black;
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.fontRegular};
`;

const Header = styled.header`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;

const Status = styled.span<{ status: boolean }>`
  font-size: ${({ theme }) => theme.fontSmall};
  color: ${({ status }) => (status ? '#42a5f5' : '#becf3d ')};
`;

const Person = styled.span`
  font-size: ${({ theme }) => theme.fontSmall};
`;

const Time = styled.span`
  font-size: ${({ theme }) => theme.fontSmall};
`;

const Message = styled.p`
  word-break: break-all;
`;
