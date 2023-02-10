import { createContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';

type ContextType = {
  portfolioId: number;
};
const PortfolioInfoContext = createContext<ContextType | undefined>(undefined);

type ContextPropType = {
  children: React.ReactNode;
};

type ParamsType = {
  portfolio: string;
};

export default function PortfolioInfoContextProvider({
  children,
}: ContextPropType) {
  const param = useParams() as ParamsType;

  //const context = useMemo(() => ({ portfolioId }));
  return (
    <PortfolioInfoContext.Provider>{children}</PortfolioInfoContext.Provider>
  );
}
