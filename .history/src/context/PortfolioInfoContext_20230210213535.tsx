import { createContext, useMemo } from 'react';

const ContextType = {
  portfolioId: number,
};
const PortfolioInfoContext = createContext<ContextType | undefined>(undefined);

type ContextPropType = {
  children: React.ReactNode;
};
export default function PortfolioInfoContextProvider({
  children,
}: ContextPropType) {
  const context = useMemo(() => ({ portfolioId }));
  return (
    <PortfolioInfoContext.Provider>{children}</PortfolioInfoContext.Provider>
  );
}
