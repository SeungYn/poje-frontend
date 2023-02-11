import { useCallback } from 'react';
import usePortfolioIntro from './usePortfolioIntro';

export default function usePortfolioModifyForm() {
  const { copiedPfIntro, setCopiedPfIntro } = usePortfolioIntro();

  const onChangeInputEl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    console.log(value);
    switch (name) {
      case 'title':
        return;
      case 'file':
        const a = URL.createObjectURL(files![0]);
        console.log(a);
        return;
    }
  };

  const onChangeTextArea = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setCopiedPfIntro((p) => ({ ...p, description: e.target.value })),
    []
  );

  return { copiedPfIntro, setCopiedPfIntro, onChangeInputEl, onChangeTextArea };
}
