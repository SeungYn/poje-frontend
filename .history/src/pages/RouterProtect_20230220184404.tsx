import useUser from '@src/hooks/auth/useUser';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface RouterProtectType {
  children: ReactNode;
}

export default function RouterProtect({ children }: RouterProtectType) {
  const { user } = useUser();
  const test = useLocation();
  console.log(test.pathname.split('/'));
  if (!user) return <Navigate to={'/auth/login'} />;
  return <>{children}</>;
}
