import usePortfolioIntro from './usePortfolioIntro';

export default function usePortfolioModifyForm() {
  const { copiedPfIntro, setCopiedPfIntro } = usePortfolioIntro();

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target;
    console.log(value);
    switch (name) {
      case 'description':
        return;
      case 'title':
        return;
      case 'file':
        return;
    }
  };

  return { copiedPfIntro, setCopiedPfIntro, onChange };
}
