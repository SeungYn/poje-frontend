import NoteContextProvider from '@src/context/NoteContext';
import { Suspense } from 'react';
import styled from 'styled-components';
import NoteList from './NoteList';

export default function NoteContainer() {
  return (
    <NoteContextProvider>
      <Container>
        <Suspense fallback={<div>로딩중</div>}>
          <NoteList />
        </Suspense>
      </Container>
    </NoteContextProvider>
  );
}

const Container = styled.section`
  position: fixed;
  z-index: 100;
  background-color: black;
  width: 400px;
  height: 90%;
  bottom: 0;
  right: 0;
  border-radius: 1rem;
  background: ${({ theme }) => theme.bgColor};
  box-shadow: 0 0 4px black;
  transform: translateY(100%);
  transform: translateY(0%);
`;
