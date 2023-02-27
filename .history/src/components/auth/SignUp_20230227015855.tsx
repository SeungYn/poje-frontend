import { useLocation } from 'react-router-dom';
import AuthFormTemplate from './AuthFormTemplate';


export default function SignUp() {
  const { pathname } = useLocation();
  return <AuthFormTemplate path={pathname.split('/')[2]} />;
}
