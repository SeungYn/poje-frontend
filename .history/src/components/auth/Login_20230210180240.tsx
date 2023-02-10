import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AuthFormTemplate from './AuthFormTemplate';
import AuthForm from './AuthFormTemplate';

export default function Login() {
  const { pathname } = useLocation();
  useEffect(() => {
    fetch('http://localhost:8080/jointest');
  }, []);
  return <AuthFormTemplate path={pathname.split('/')[2]} />;
}
