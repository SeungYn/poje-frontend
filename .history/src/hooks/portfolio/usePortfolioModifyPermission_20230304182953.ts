import service from '@src/service';
import { GetModifyPermissionRequest } from '@src/service/types/portfolio';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

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
        console.log(result, '수정권한');
        result && setPermissionModify((e) => true);
      },
    }
  );

  useEffect(() => {
    getModifyPermission.mutate({ portfolioId });
  }, [portfolioId]);

  return permissionModify;
}
