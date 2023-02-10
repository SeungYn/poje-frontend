import CommonModal from '@src/components/common/CommonModal';
import { createContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';

type ContextType = {
  portfolioId: string;
};
const PortfolioInfoContext = createContext<ContextType | undefined>(undefined);

type ContextPropType = {
  children: React.ReactNode;
};

type ParamsType = {
  portfolioId: string;
};

export default function PortfolioInfoContextProvider({
  children,
}: ContextPropType) {
  const { portfolioId } = useParams() as ParamsType;

  const context = useMemo<ContextType>(() => ({ portfolioId }), [portfolioId]);
  return (
    <PortfolioInfoContext.Provider value={context}>
      <CommonModal />
      {children}
    </PortfolioInfoContext.Provider>
  );
}
