import { useLocation } from 'react-router-dom';
import AuthFormTemplate from './AuthFormTemplate';
import AuthForm from './AuthFormTemplate';

export default function Login() {
  const location = useLocation();
  console.log(location);
  return <AuthFormTemplate />;
}
