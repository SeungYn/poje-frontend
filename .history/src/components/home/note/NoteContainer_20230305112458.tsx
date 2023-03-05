import LoadingSpiner from '@src/components/portfolio/common/LoadingSpiner';
import NoteContextProvider from '@src/context/NoteContext';
import { useNoteDropDownHelper } from '@src/hooks/note';
import { Suspense } from 'react';
import styled from 'styled-components';
import NoteContent from './NoteContent';
import NoteList from './NoteList';

export default function NoteContainer() {
  const { targetRef, isOpen, handleOpenToggle } =
    useNoteDropDownHelper<HTMLDivElement>();
  return (
    <NoteContextProvider ref={ref}>
      <Container>
        <Suspense fallback={<LoadingSpiner text='로딩중' />}>
          <NoteList />
        </Suspense>
        <NoteContent />
      </Container>
    </NoteContextProvider>
  );
}

const Container = styled.div`
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
