import service from '@src/service';
import { NoteListType } from '@src/service/types/member';
import { useMutation } from '@tanstack/react-query';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type ContextType = {
  selectedNote: NoteListType | null;
  handleClickNote: (portfolioId: NoteListType) => void;
  handleDeleteSelectedNote: () => void;
};

const NoteContext = createContext<ContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export default function NoteContextProvider({ children }: Props) {
  const [selectedNote, setSelectedNote] = useState<NoteListType | null>(null);

  const handleClickNote = useCallback((note: NoteListType) => {
    setSelectedNote(note);
  }, []);

  const handleDeleteSelectedNote = useCallback(() => {
    setSelectedNote(null);
  }, []);

  const replyNote = useMutation((message: string) =>
    service.member.replyNote({
      portfolioId: selectedNote!.portfolioId,
      message,
    })
  );

  const context = useMemo<ContextType>(
    () => ({ selectedNote, handleClickNote, handleDeleteSelectedNote }),
    [selectedNote, handleClickNote, handleDeleteSelectedNote]
  );

  return (
    <NoteContext.Provider value={context}>{children}</NoteContext.Provider>
  );
}

export const useNoteContext = () => useContext(NoteContext)! as ContextType;
