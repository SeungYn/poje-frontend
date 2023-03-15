import { useRecoilState } from 'recoil';
import service from '@src/service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { isOpenNoteState } from '@src/store/note';
import { useCallback, useRef, useEffect } from 'react';
import { SendNoteRequest } from '@src/service/types/member';
import useUser from '../auth/useUser';

export const useGetNoteList = () => {
  const { data } = useQuery(['note'], () => service.member.getNoteList(), {
    suspense: true,
    staleTime: 1000,
    refetchOnMount:true,
  });

  return data!;
};

export const useGetNoteCentent = (email: string | undefined) => {
  const queryClient = useQueryClient();
  const { data = [] } = useQuery(
    ['note', email],
    () => (email ? service.member.getNote({ email }) : []),
    {
      onSettled:()=> console.log(123),
      refetchOnMount: true,
      staleTime: 1000,
      
    }
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
        if (target.dataset.type) return setIsOpen((f) => !f);
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

//쪽지 확인 여부 30초마다 요청해서 확인\
export const useNoteAlarm = () => {
  
  const { user } = useUser();
  const { data } = useQuery(
    ['noteAlarm'],
    () => service.member.getNoteAlarm(),
    {
      staleTime: 1000* 30,
      refetchInterval: 1000* 30,
      enabled: !!user,
    }
  );
  
  return data?.exists;
};

//포트폴리오 페이지에서 쪽지 보내기
export const useSendNote = () => {
  const queryClient = useQueryClient();
  const sendNote = useMutation(
    (data: SendNoteRequest) => service.member.sendNote(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['note']);
      },
    }
  );

  return sendNote.mutate;
};

//쪽지 보낼 포트폴리오 상대 이메일 가져오기
export const useGetNoteSender = (portfolioId: string) => {
  const { data } = useQuery(
    ['portfolioAboutMe', portfolioId],
    async () => await service.portfolio.getAboutMe({ portfolioId })
  );
  return data ? data.email : '';
};
