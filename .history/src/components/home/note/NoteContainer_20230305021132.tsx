import styled from 'styled-components';

export default function NoteContainer() {
  return <Container></Container>;
}

const Container = styled.section`
  position: absolute;
  z-index: 100;
  background-color: black;
  width: 400px;
  height: 90%;
  bottom: 0;
  right: 0;
  border-radius: 1rem;
  background: ${({ theme }) => theme.bgColor};
`;
