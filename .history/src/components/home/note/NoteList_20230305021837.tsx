import styled from 'styled-components';

export default function NoteList() {
  return (
    <Container>
      <Title>쪽지함</Title>
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
