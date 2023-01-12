import { useLocation } from 'react-router-dom';
import AuthFormTemplate from './AuthFormTemplate';
import AuthForm from './AuthFormTemplate';

export default function Login() {
  const { pathname } = useLocation();

  return <AuthFormTemplate type={pathname.split('/')[2]} />;
}
