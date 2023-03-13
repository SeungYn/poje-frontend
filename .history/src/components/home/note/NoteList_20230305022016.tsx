import styled from 'styled-components';

export default function NoteList() {
  const data = [
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
  ];
  return (
    <Container>
      <Title>쪽지함</Title>
      <NoteListUl></NoteListUl>
    </Container>
  );
}

const Container = styled.article`
  height: 100%;
  width: 100%;
`;

const Title = styled.h2``;

const NoteListUl = styled.ul`
  width: 100%;
  height: 100%;
`;
