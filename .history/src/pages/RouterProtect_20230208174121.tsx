import useUser from '@src/hooks/auth/useUser';
import { ReactNode } from 'react';

interface RouterProtectType {
  children: ReactNode;
}

export default function RouterProtect({ children }: RouterProtectType) {
  const { user } = useUser();
}
