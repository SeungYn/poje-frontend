import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import { AboutMeType } from '@src/service/types/portfolio';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

type AboutMeFormType = AboutMeType & { profileImgFile: File | null };

export default function useAboutMeModifyForm() {
  const { portfolioId } = usePortfolioInfo();
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
      case 'nickName':
        return setForm((f) => ({ ...f, nickName: value }));
      case 'nickName':
        return setForm((f) => ({ ...f, nickName: value }));
      case 'nickName':
        return setForm((f) => ({ ...f, nickName: value }));
      case 'nickName':
        return setForm((f) => ({ ...f, nickName: value }));
      case 'nickName':
        return setForm((f) => ({ ...f, nickName: value }));
      case 'nickName':
        return setForm((f) => ({ ...f, nickName: value }));
      case 'nickName':
        return setForm((f) => ({ ...f, nickName: value }));
    }
  };

  return { form, onChange };
}
