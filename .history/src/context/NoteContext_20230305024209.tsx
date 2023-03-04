import { createContext } from 'react';

type ContextType = {
  selectedPortfolioId: string | null;
  handleClickNote: () => void;
};

const noteContext = createContext<undefined>(undefined);
