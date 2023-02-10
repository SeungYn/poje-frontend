import { createContext } from 'react';

const PortfolioInfoContext = createContext<{ portfolioId: number } | undefined>(
  undefined
);

type ContextType = {
  children: React.ReactNode;
};
export default function PortfolioInfoContextProvider({
  children,
}: ContextType) {
  return (
    <PortfolioInfoContext.Provider>{children}</PortfolioInfoContext.Provider>
  );
}
