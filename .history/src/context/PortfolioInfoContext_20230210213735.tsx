import { createContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';

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
  const param = useParams<{ portfolioId: number | string }>();
  const context = useMemo(() => ({ portfolioId }));
  return (
    <PortfolioInfoContext.Provider>{children}</PortfolioInfoContext.Provider>
  );
}
