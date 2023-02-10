import { createContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';

type ContextType = {
  portfolioId: number;
};
const PortfolioInfoContext = createContext<ContextType | undefined>(undefined);

type ContextPropType = {
  children: React.ReactNode;
};
export default function PortfolioInfoContextProvider({
  children,
}: ContextPropType) {
  const param = useParams() as { portfolio: number };
  //const context = useMemo(() => ({ portfolioId }));
  return <div></div>;
}
