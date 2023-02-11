import usePortfolioIntro from './usePortfolioIntro';

export default function usePortfolioModifyForm() {
  const { copiedPfIntro, setCopiedPfIntro } = usePortfolioIntro();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return { copiedPfIntro, setCopiedPfIntro };
}
