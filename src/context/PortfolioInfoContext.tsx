import CommonModal from '@src/components/common/CommonModal';
import { useGetNoteSender } from '@src/hooks/note';
import usePortfolioModifyPermission from '@src/hooks/portfolio/usePortfolioModifyPermission';
import { createContext, useMemo, useContext } from 'react';
import { useParams } from 'react-router-dom';

type ContextType = {
  portfolioId: string;
  permissionModify: boolean;
  portfolioEmail: string;
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
  const permissionModify = usePortfolioModifyPermission(portfolioId);
  const portfolioEmail = useGetNoteSender(portfolioId);

  const context = useMemo<ContextType>(() => {
    return { portfolioId, permissionModify, portfolioEmail };
  }, [portfolioId, permissionModify, portfolioEmail]);

  return (
    <PortfolioInfoContext.Provider value={context}>
      <CommonModal />
      {children}
    </PortfolioInfoContext.Provider>
  );
}

export const usePortfolioInfo = () =>
  useContext(PortfolioInfoContext)! as ContextType;
