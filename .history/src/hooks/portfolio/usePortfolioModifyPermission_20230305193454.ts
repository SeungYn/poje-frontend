import service from '@src/service';
import { GetModifyPermissionRequest } from '@src/service/types/portfolio';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState, useCallback } from 'react';

export default function usePortfolioModifyPermission(portfolioId: string) {
  const [permissionModify, setPermissionModify] = useState(false);

  const { data } = useQuery(
    ['portfolioPermission', portfolioId],
    () => service.portfolio.getPortfolioModifyPermission({ portfolioId }),
    {
      onSuccess: (result) => {
        result && setPermissionModify((e) => true);
      },
    }
  );

  return permissionModify;
}
