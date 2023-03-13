import service from '@src/service';
import { GetModifyPermissionRequest } from '@src/service/types/portfolio';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export default function usePortfolioModifyPermission(portfolioId: string) {
  const [permissionModify, setPermissionModify] = useState(false);
  const getPortfolioModifyPermission =
    service.portfolio.getPortfolioModifyPermission;
  const getModifyPermission = useMutation<
    boolean,
    unknown,
    GetModifyPermissionRequest,
    unknown
  >((data: GetModifyPermissionRequest) => getPortfolioModifyPermission(data), {
    onSuccess: (result) => {
      result && setPermissionModify((e) => true);
    },
  });
  useEffect(() => {
    getModifyPermission.mutate({ portfolioId });
  }, [portfolioId, getModifyPermission]);

  return permissionModify;
}
