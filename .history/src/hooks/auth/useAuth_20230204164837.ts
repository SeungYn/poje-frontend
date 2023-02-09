import service from '@src/service';

export default function useAuth() {
  const login = service.auth.login;
  return { login };
}
