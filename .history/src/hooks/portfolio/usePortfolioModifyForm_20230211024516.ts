import usePortfolioIntro from './usePortfolioIntro';

export default function usePortfolioModifyForm() {
  const { copiedPfIntro, setCopiedPfIntro } = usePortfolioIntro();

  const onChangeInputEl = (
    e: React.ChangeEvent<HTMLInputElement >
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
	
	const onChangeTextArea = (    e: React.ChangeEvent<HTMLTextAreaElement>) => 

  return { copiedPfIntro, setCopiedPfIntro, onChange };
}
