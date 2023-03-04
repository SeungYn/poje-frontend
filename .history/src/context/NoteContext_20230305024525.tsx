import { createContext, useState } from 'react';

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

  return <NoteContext.Provider>{children}</NoteContext.Provider>;
}
