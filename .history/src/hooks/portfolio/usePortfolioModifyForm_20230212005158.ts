import { useCallback, useRef } from 'react';
import usePortfolioIntro from './usePortfolioIntro';

export default function usePortfolioModifyForm() {
  const { copiedPfIntro, setCopiedPfIntro, updateIntro } = usePortfolioIntro();
  const discriptionRef = useRef<HTMLTextAreaElement>(null);

  const onChangeInputEl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    switch (name) {
      case 'title':
        setCopiedPfIntro((p) => ({
          ...p,
          title: value,
        }));
        return;
      case 'file':
        const file = files![0];
        const backgroundImg = URL.createObjectURL(file);
        return setCopiedPfIntro((p) => ({
          ...p,
          backgroundImg,
          backgroundImgFile: file,
        }));
    }
  };

  const onChangeTextArea = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (discriptionRef.current) {
        discriptionRef.current.style.height = 'auto';
        discriptionRef.current.style.height = `${discriptionRef.current.scrollHeight}px`;
      }
      setCopiedPfIntro((p) => ({ ...p, description: e.target.value }));
    },
    []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description, portfolioId, backgroundImgFile } =
      copiedPfIntro;
    updateIntro({ title, description, portfolioId, backgroundImgFile });
  };

  return {
    copiedPfIntro,
    onChangeInputEl,
    onChangeTextArea,
    discriptionRef,
    handleSubmit,
  };
}
