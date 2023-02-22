import useUser from '@src/hooks/auth/useUser';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function AuthRouterProtect({
  children,
}: {
  children: ReactNode;
}) {
  const { user } = useUser();
  const test = useLocation();
  console.log(test.pathname.split('/'));

  //로그인이 했는데 다시 로그인 페이지로 가려하면 리다이렉트

  if (user && test.pathname.split('/')[1] === 'auth')
    return <Navigate to={'/job'} />;
  return <>{children}</>;
}
