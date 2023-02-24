import service from '@src/service';
import { GetModifyPermissionRequest } from '@src/service/types/portfolio';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export default function useProtfolioModifyPermission(portfolioId: string) {
  const [permissionModify, setPermissionModify] = useState(false);

  const getModifyPermission = useMutation(
    (data: GetModifyPermissionRequest) =>
      service.portfolio.getPortfolioModifyPermission(data),
    {
      onSuccess: () => {
        setPermissionModify(true);
      },
    }
  );

  useEffect(() => {
    getModifyPermission.mutate({ portfolioId });
  }, []);

  return permissionModify;
}
