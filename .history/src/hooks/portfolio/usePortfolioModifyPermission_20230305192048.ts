import service from '@src/service';
import { GetModifyPermissionRequest } from '@src/service/types/portfolio';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState, useCallback } from 'react';

export default function usePortfolioModifyPermission(portfolioId: string) {
  const [permissionModify, setPermissionModify] = useState(false);
  const getModifyPermission = useMutation<
    boolean,
    unknown,
    GetModifyPermissionRequest,
    unknown
  >(
    (data: GetModifyPermissionRequest) =>
      service.portfolio.getPortfolioModifyPermission(data),
    {
      onSuccess: (result) => {
        result && setPermissionModify((e) => true);
      },
    }
  );

  const handleGetModifyPermission = useCallback(
    () => getModifyPermission.mutate({ portfolioId }),
    [portfolioId]
  );

  useEffect(() => {
    console.log(portfolioId);
    getModifyPermission.mutate({ portfolioId });
  }, [portfolioId, getModifyPermission]);

  return permissionModify;
}
