import service from '@src/service';
import { GetModifyPermissionRequest } from '@src/service/types/portfolio';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

export default function useProtfolioModifyPermission() {
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
  return 1;
}
