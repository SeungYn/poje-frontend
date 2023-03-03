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

type UseSideNavbarReturnType = <
  T extends HTMLElement,
  O extends HTMLElement
>() => [boolean, React.RefObject<T>, React.RefObject<O>, () => void];
export const useSideNavbar: UseSideNavbarReturnType = <
  T extends HTMLElement,
  O extends HTMLElement
>() => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const containerRef = useRef<T>(null);
  const navbarRef = useRef<O>(null);

  const toggleHandler = () => {
    console.log('click');
    const navbarWidth = navbarRef.current!.offsetWidth;

    if (containerRef.current) {
      let calcedPosition = navbarWidth;
      if (isOpen) calcedPosition *= -1;
      else calcedPosition = 0;
      containerRef.current.style.transform = `translateX(${calcedPosition}px)`;
    }
    setIsOpen((v) => !v);
  };

  const onOpenSide = useCallback(() => {
    if (containerRef.current && !isOpen) {
      containerRef.current.style.transform = `translateX(0px)`;
    }
    setIsOpen(true);
  }, [containerRef, isOpen]);

  const onCloseSide = useCallback(() => {
    const navbarWidth = navbarRef.current!.offsetWidth;
    if (containerRef.current && isOpen) {
      let calcedPosition = navbarWidth;
      containerRef.current.style.transform = `translateX(${-calcedPosition}px)`;
    }
    setIsOpen(false);
  }, [containerRef, navbarRef, isOpen]);

  const onClose = useCallback(
    (e: MouseEvent) => {
      if (
        e.target !== null &&
        e.target !== containerRef.current &&
        !containerRef.current?.contains(e.target as HTMLElement)
      ) {
        onCloseSide();
      }
    },
    [containerRef]
  );

  useEffect(() => {
    document.addEventListener('click', onClose);

    return () => {
      document.addEventListener('click', onClose);
    };
  }, [onClose]);
  return [isOpen, containerRef, navbarRef, toggleHandler];
};
