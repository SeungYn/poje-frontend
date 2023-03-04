import service from '@src/service';
import { MemberType } from '@src/service/types/member';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect, useRef, useState } from 'react';
import useMyInfo from './useMyInfo';

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
    isOpen ? onCloseSide() : onOpenSide();
  };

  const onOpenSide = useCallback(() => {
    if (containerRef.current && !isOpen) {
      containerRef.current.style.transform = `translateX(0px)`;
    }
    setIsOpen(true);
  }, [containerRef, isOpen]);

  const onCloseSide = useCallback(() => {
    if (!navbarRef.current) return;
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
    [containerRef, onCloseSide]
  );

  useEffect(() => {
    document.addEventListener('click', onClose);

    return () => {
      document.addEventListener('click', onClose);
    };
  }, [onClose]);
  return [isOpen, containerRef, navbarRef, toggleHandler];
};

export const useGetMyPortfolios = () => {
  const { data } = useQuery(
    ['myPortfolios'],
    () => service.member.GetMyPortfolios(),
    { suspense: true }
  );

  return data!;
};

type MemberForm = MemberType & { file: File | null };
const initalizeForm = {
  nickName: '',
  email: '',
  phoneNum: '',
  gender: '',
  academic: '',
  dept: '',
  birth: '',
  profileImg: '',
  gitHubLink: '',
  blogLink: '',
  file: null,
};
export const useModifyMyInfo = () => {
  const { userInfo } = useMyInfo();
  const [form, setForm] = useState<MemberForm>(initalizeForm);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    switch (name) {
      case 'nickName':
        return setForm((f) => ({ ...f, nickName: value }));
      case 'email':
        return setForm((f) => ({ ...f, email: value }));
      case 'phoneNum':
        return setForm((f) => ({ ...f, phoneNum: value }));
      case 'birth':
        return setForm((f) => ({ ...f, birth: value }));
      case 'academic':
        return setForm((f) => ({ ...f, academic: value }));
      case 'dept':
        return setForm((f) => ({ ...f, dept: value }));
      case 'gitHubLink':
        return setForm((f) => ({ ...f, gitHubLink: value }));
      case 'blogLink':
        return setForm((f) => ({ ...f, blogLink: value }));
      case 'file':
        const file = files![0];
        const fileImgUrl = URL.createObjectURL(file);
        return setForm((f) => ({ ...f, file, profileImg: fileImgUrl }));
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('전송');
  };

  useEffect(() => {
    userInfo && setForm({ ...userInfo, file: null });
  }, [userInfo]);

  return { form, onChange };
};
