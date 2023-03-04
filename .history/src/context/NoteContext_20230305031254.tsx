import { NoteListType } from '@src/service/types/member';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type ContextType = {
  selectedNote: NoteListType | null;
  handleClickNote: (portfolioId: string) => void;
};

const NoteContext = createContext<ContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export default function NoteContextProvider({ children }: Props) {
  const [selectedNote, setSelectedNote] = useState<string | null>(null);

  const handleClickNote = useCallback((portfolioId: string) => {
    setSelectedNote(portfolioId);
  }, []);

  const context = useMemo<ContextType>(
    () => ({ selectedNote, handleClickNote }),
    [selectedNote, handleClickNote]
  );

  return (
    <NoteContext.Provider value={context}>{children}</NoteContext.Provider>
  );
}

export const useNoteContext = () => useContext(NoteContext)! as ContextType;
