import CommonModal from '@src/components/common/CommonModal';
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

  const context = useMemo(() => ({ portfolioId }), [param]);
  return (
    <PortfolioInfoContext.Provider>
      <CommonModal />
      {children}
    </PortfolioInfoContext.Provider>
  );
}
