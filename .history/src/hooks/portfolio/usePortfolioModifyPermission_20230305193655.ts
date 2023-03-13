import service from '@src/service';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function usePortfolioModifyPermission(portfolioId: string) {
  const [permissionModify, setPermissionModify] = useState(false);

  const { data } = useQuery(
    ['portfolioPermission', portfolioId],
    () => service.portfolio.getPortfolioModifyPermission({ portfolioId }),
    {
      onSuccess: (result) => {
        console.log(result, 'result');
        result && setPermissionModify((e) => true);
      },
    }
  );

  console.log(permissionModify);

  return permissionModify;
}
