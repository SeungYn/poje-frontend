import { useCallback, useEffect, useRef } from 'react';
import usePortfolioIntro from './usePortfolioIntro';

export default function usePortfolioModifyForm() {
  const { copiedPfIntro, setCopiedPfIntro } = usePortfolioIntro();
  const discriptionRef = useRef<HTMLTextAreaElement>(null);

  const onChangeInputEl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    console.log(value);
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
      if (discriptionRef) {
      }
      setCopiedPfIntro((p) => ({ ...p, description: e.target.value }));
    },
    []
  );
  useEffect(() => {
    console.log(copiedPfIntro);
  }, [copiedPfIntro]);
  return {
    copiedPfIntro,
    setCopiedPfIntro,
    onChangeInputEl,
    onChangeTextArea,
    discriptionRef,
  };
}
