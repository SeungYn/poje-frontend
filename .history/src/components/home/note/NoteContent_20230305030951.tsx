import { useNoteContext } from '@src/context/NoteContext';

export default function NoteContent() {
  const { handleClickNote, selectedPortfolioId } = useNoteContext();
  if (!selectedPortfolioId) return <></>;
  return <div></div>;
}
