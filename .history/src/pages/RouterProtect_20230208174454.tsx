import useUser from '@src/hooks/auth/useUser';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface RouterProtectType {
  children: ReactNode;
}

export default function RouterProtect({ children }: RouterProtectType) {
  const { user } = useUser();
  if (!user) return <Navigate to={'/auth/login'} />;
}
