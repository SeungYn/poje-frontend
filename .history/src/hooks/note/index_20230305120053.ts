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
      const target = e.target;
      //쪽지 아이콘 버튼을 클릭했을때 종료해주기 버튼쪽에서 클릭이벤트 처리했음
      if (target instanceof HTMLElement || target instanceof SVGElement) {
        if (target.dataset.type) return;
      }

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
    document.addEventListener('click', handleClose);

    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, [handleClose]);

  return [isOpen, targetRef];
};
