import styled from 'styled-components';

export default function NoteList() {
  const data = [
    {
      portfolioId: 8,
      title: '제목을 입력해주세요.',
    },
    {
      portfolioId: 8,
      title: '제목을 입력해주세요.',
    },
    {
      portfolioId: 8,
      title: '제목을 입력해주세요.',
    },
    {
      portfolioId: 8,
      title: '제목을 입력해주세요.',
    },
  ];
  return (
    <Container>
      <Title>쪽지함</Title>
      <NoteListUl>
        {data.map((item) => (
          <Note>{item.title}</Note>
        ))}
      </NoteListUl>
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

const Note = styled.li`
  padding: 1rem 0;
`;
