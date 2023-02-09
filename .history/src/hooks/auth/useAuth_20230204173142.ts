import service from '@src/service';
import { LoginRequest } from '@src/service/types/auth';
import { useMutation } from '@tanstack/react-query';

export default function useAuth() {
  const login = useMutation(
    (data: LoginRequest) => {
      return service.auth.login(data);
    },
    {
      onSuccess: () => {},
    }
  );
  return { login };
}
