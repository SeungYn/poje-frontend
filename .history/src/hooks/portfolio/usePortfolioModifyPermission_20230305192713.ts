import service from '@src/service';
import { GetModifyPermissionRequest } from '@src/service/types/portfolio';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState, useCallback } from 'react';

export default function usePortfolioModifyPermission(portfolioId: string) {
  const { data: result } = useQuery(
    ['portfolioPermission', portfolioId],
    () => service.portfolio.getPortfolioModifyPermission({ portfolioId }),
    {
      initialData: false,
    }
  );

  return permissionModify;
}
