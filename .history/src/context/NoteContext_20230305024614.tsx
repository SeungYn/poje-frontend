import { createContext, useMemo, useState } from 'react';

type ContextType = {
  selectedPortfolioId: string | null;
  handleClickNote: (portfolioId: string) => void;
};

const NoteContext = createContext<ContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export default function NoteContextProvider({ children }: Props) {
  const [selectedPortfolioId, setSelectedPortfolioId] = useState<string | null>(
    null
  );

  const handleClickNote = (portfolioId: string) => {
    setSelectedPortfolioId(portfolioId);
  };

  const context = useMemo<NoteContext>(
    () => ({ selectedPortfolioId, handleClickNote }),
    []
  );

  return <NoteContext.Provider value={}>{children}</NoteContext.Provider>;
}
