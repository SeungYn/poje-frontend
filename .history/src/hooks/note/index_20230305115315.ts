import { useRecoilState } from 'recoil';
import service from '@src/service';
import { useQuery } from '@tanstack/react-query';
import { isOpenNoteState } from '@src/store/note';
import { useCallback, useRef, useEffect } from 'react';

export const useGetNoteList = () => {
  const { data } = useQuery(['note'], () => service.member.getNoteList(), {
    suspense: true,
  });

  return data!;
};

export const useGetNote = (portfolioId: string | number | undefined) => {
  const { data = [] } = useQuery(
    ['note', portfolioId],
    () => (portfolioId ? service.member.getNote({ portfolioId }) : []),
    {}
  );

  return data!;
};

type useNoteDropDownType = <T extends HTMLElement>() => [
  boolean,
  React.RefObject<T>
];
export const useNoteDropDownHelper: useNoteDropDownType = <
  T extends HTMLElement
>() => {
  const [isOpen, setIsOpen] = useRecoilState(isOpenNoteState);
  const targetRef = useRef<T>(null);

  const handleClose = useCallback(
    (e: MouseEvent) => {
      if (
        e.target !== null &&
        e.target !== targetRef.current &&
        !targetRef.current?.contains(e.target as HTMLElement)
      ) {
        setIsOpen(false);
      }
    },
    [targetRef, setIsOpen]
  );

  useEffect(() => {
    //document.addEventListener('click', handleClose);

    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, [handleClose]);

  return [isOpen, targetRef];
};
