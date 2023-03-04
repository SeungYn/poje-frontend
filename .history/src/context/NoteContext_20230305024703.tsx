import { createContext, useCallback, useMemo, useState } from 'react';

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

  const handleClickNote = useCallback((portfolioId: string) => {
    setSelectedPortfolioId(portfolioId);
  }, []);

  const context = useMemo<ContextType>(
    () => ({ selectedPortfolioId, handleClickNote }),
    [selectedPortfolioId, handleClickNote]
  );

  return (
    <NoteContext.Provider value={context}>{children}</NoteContext.Provider>
  );
}
