import { isModifyModeFromPortfolioIntro } from '@src/store/portfolio/modify';
import { useCallback, useRef, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import usePortfolioIntro from './usePortfolioIntro';

export default function usePortfolioModifyForm() {
  const { copiedPfIntro, setCopiedPfIntro, updateIntro } = usePortfolioIntro();
  const discriptionRef = useRef<HTMLTextAreaElement>(null);
  const setModify = useSetRecoilState(isModifyModeFromPortfolioIntro);

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
      resizeAutoTextArea();
      setCopiedPfIntro((p) => ({ ...p, description: e.target.value }));
    },
    []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModify(false);
    const { title, description, portfolioId, backgroundImgFile } =
      copiedPfIntro;
    updateIntro({ title, description, portfolioId, backgroundImgFile });
  };

  const resizeAutoTextArea = () => {
    if (discriptionRef.current) {
      discriptionRef.current.style.height = 'auto';
      discriptionRef.current.style.height = `${discriptionRef.current.scrollHeight}px`;
    }
  };
  useEffect(() => {
    resizeAutoTextArea();
  }, [discriptionRef.current]);

  //컴포넌트 unMount시 URL.Object헤제
  useEffect(() => {
    return () => {
      copiedPfIntro.backgroundImgFile &&
        URL.revokeObjectURL(copiedPfIntro.backgroundImg);
    };
  }, []);

  return {
    copiedPfIntro,
    onChangeInputEl,
    onChangeTextArea,
    discriptionRef,
    handleSubmit,
  };
}
