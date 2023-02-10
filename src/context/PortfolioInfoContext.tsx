import { createContext } from 'react';

const PortfolioInfoContext = createContext<{ portfolioId: number } | undefined>(
  undefined
);
export default function PortfolioInfoContextProvider() {
  return <div></div>;
}
