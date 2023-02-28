import { Outlet } from 'react-router-dom';
import PortfolioHeader from '../../components/portfolio/PortfolioHeader';

export default function PortfolioRootPage() {
  return (
    <>
      <PortfolioHeader />
      <Outlet />
    </>
  );
}
