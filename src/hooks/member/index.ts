import service from '@src/service';
import {
  FindPasswordRequest,
  PutMemberInfoRequest,
} from '@src/service/types/member';
import { pwFindModalState } from '@src/store/auth';
import { commonLoadingState } from '@src/store/common';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import useModal from '../common/useModal';
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
    const navbarWidth = navbarRef.current.offsetWidth;
    if (containerRef.current && isOpen) {
      let calcedPosition = navbarWidth;
      containerRef.current.style.transform = `translateX(${-calcedPosition}px)`;
      setIsOpen(false);
    }
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
  }, [onClose, onOpenSide]);
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
  profileImgFile: undefined,
};
export const useModifyMyInfo = () => {
  const { userInfo } = useMyInfo();
  const [form, setForm] = useState<PutMemberInfoRequest>(initalizeForm);
  const updateMember = useUpdateMemberInfo();
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
        return setForm((f) => ({
          ...f,
          profileImgFile: file,
          profileImg: fileImgUrl,
        }));
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateMember(form);
  };

  useEffect(() => {
    userInfo && setForm({ ...userInfo, profileImgFile: undefined });
  }, [userInfo]);

  return { form, onChange, onSubmit };
};

export const useUpdateMemberInfo = () => {
  const queryClient = useQueryClient();
  const setLoading = useSetRecoilState(commonLoadingState);
  const { setModal } = useModal();
  const updateMemberInfo = useMutation(
    (data: PutMemberInfoRequest) => {
      return service.member.putMemberInfo(data);
    },
    {
      onMutate: () => {
        setLoading(true);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(['myInfo']);
      },
      onError: (e: Error) => {
        setModal(e.message);
      },
      onSettled: () => {
        setLoading(false);
      },
    }
  );
  return updateMemberInfo.mutate;
};

type PassFormType = {
  existPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
  error: string;
};

type PassAction =
  | { type: 'existPassword'; payload: string }
  | { type: 'newPassword'; payload: string }
  | { type: 'newPasswordConfirm'; payload: string };

const initialPassForm: PassFormType = {
  existPassword: '',
  newPassword: '',
  newPasswordConfirm: '',
  error: '',
};

function passReducer(state: PassFormType, action: PassAction) {
  switch (action.type) {
    case 'existPassword':
      return { ...state, existPassword: action.payload };
    case 'newPassword':
      return { ...state, newPassword: action.payload };
    case 'newPasswordConfirm':
      const newForm = { ...state, newPasswordConfirm: action.payload };
      if (!checkPWError(newForm.newPassword, newForm.newPasswordConfirm))
        return { ...newForm, error: '비밀번호가 일치하지 않습니다.' };
      return { ...newForm, error: '' };
  }
}

function checkPWError(pw: string, pwc: string) {
  return pw === pwc ? true : false;
}

export const usePwModifyForm: () => [
  PassFormType,
  React.Dispatch<PassAction>,
  (e: React.FormEvent<HTMLElement>) => void
] = () => {
  const [state, dispatch] = useReducer(passReducer, initialPassForm);
  const { setModal } = useModal();
  const updatePassword = usePasswordModify();

  const submitHandle = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (state.error) return setModal('비밀번호를 확인해 주세요.');
    if (!checkValidForm()) return setModal('비밀번호를 입력해 주세요.');
    updatePassword(state);
  };

  const checkValidForm = useCallback(() => {
    return Object.values(state).every((s, i) => {
      if (i === 3) return true;
      return s !== '';
    });
  }, [state]);

  return [state, dispatch, submitHandle];
};

const usePasswordModify = () => {
  const setLoading = useSetRecoilState(commonLoadingState);
  const { setModal } = useModal();
  const update = useMutation(
    (data: PassFormType) =>
      service.member.updatePassword({
        newPassword: data.newPassword,
        newPasswordConfirm: data.newPasswordConfirm,
        existPassword: data.existPassword,
      }),
    {
      onMutate: () => setLoading(true),
      onSuccess: () => setModal('비밀번호가 변경되었습니다.'),
      onError: (e: Error) => {
        setModal(e.message);
      },
      onSettled: () => setLoading(false),
    }
  );
  return update.mutate;
};

export const useFindPasswordForm = () => {
  const { setModal } = useModal();
  const setFindPwModalState = useSetRecoilState(pwFindModalState);
  const [state, setState] = useState({
    nickName: '',
    email: '',
    emailError: '',
  });

  const findPassword = useMutation(
    (data: FindPasswordRequest) => service.member.findPassword(data),
    {
      onSuccess: (res) => {
        setModal(res.message, () => {
          setFindPwModalState(false);
        });
      },
      onError: (e: Error) => {
        setModal(e.message);
      },
    }
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    switch (name) {
      case 'nickName':
        return setState((f) => ({ ...f, nickName: value }));
      case 'email':
        return setState((f) => ({ ...f, email: value }));
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    findPassword.mutate({ nickName: state.nickName, email: state.email });
  };

  return { state, onSubmit, onChange };
};
