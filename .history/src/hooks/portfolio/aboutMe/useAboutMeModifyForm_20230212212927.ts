import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import { AboutMeType } from '@src/service/types/portfolio';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import usePortfolioAboutMe from '@src/hooks/portfolio/aboutMe/usePortfolioAboutMe';

type AboutMeFormType = AboutMeType & { profileImgFile: File | null };

export default function useAboutMeModifyForm() {
  const { portfolioId } = usePortfolioInfo();
  const { update } = usePortfolioAboutMe;
  const queryClient = useQueryClient();
  const [form, setForm] = useState<AboutMeFormType>({
    ...queryClient.getQueryData<AboutMeType>([
      'portfolioAboutMe',
      portfolioId,
    ])!,
    profileImgFile: null,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

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
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return { form, onChange, onSubmit };
}
