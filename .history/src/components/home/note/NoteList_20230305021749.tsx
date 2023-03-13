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
  color: blue;
`;

const Title = styled.h2``;
