import service from '@src/service';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useRef, useState } from 'react';

export const usePortfolioListsByLike = (page: string) => {
  const { data } = useQuery(
    ['portfoliosListWithLike', page],
    () => service.job.getePortfolioCardsWithLike({ page }),
    { staleTime: 1000 * 60, suspense: true }
  );

  return { pageingUtil: data!.paging, pfAndMemberResp: data!.pfAndMemberResp };
};

type UseSideNavbarType<T extends HTMLElement> = [
  boolean,
  React.RefObject<T>,
  React.RefObject<T>,
  () => void
];
export const useSideNavbar: <T extends HTMLElement, O extends HTMLElement>(
  targetRef: number
) => UseSideNavbarType<T> = <T extends HTMLElement>() => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const ref = useRef<T>(null);

  const toggleHandler = () => {
    setIsOpen((v) => !v);
  };

  const onClose = useCallback(
    (e: MouseEvent) => {
      if (
        e.target !== null &&
        e.target !== ref.current &&
        !ref.current?.contains(e.target as HTMLElement)
      ) {
        setIsOpen(false);
      }
    },
    [ref]
  );

  useEffect(() => {
    document.addEventListener('click', onClose);

    return () => {
      document.addEventListener('click', onClose);
    };
  }, [onClose]);
  return [isOpen, ref, toggleHandler];
};
