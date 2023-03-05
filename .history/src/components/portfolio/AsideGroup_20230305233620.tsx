import styled from 'styled-components';
import SendNoteModalBtn from '../home/note/SendNoteModalBtn';
import PortfolioLike from './PortfolioLike';

export default function AsideGroup() {
  return (
    <Container>
      <PortfolioLike />
      <SendNoteModalBtn />
    </Container>
  );
}

const Container = styled.aside`
  position: fixed;
  bottom: 4rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
`;
