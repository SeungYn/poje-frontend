import service from '@src/service';
import { createPortfolioTemplateRequest } from '@src/service/types/portfolio';
import { useMutation } from '@tanstack/react-query';
import useModal from '../common/useModal';

export default function usePortfolioCRUD() {
  const { setModal } = useModal();
  const { mutate: createPortfolio } = useMutation(
    (data: createPortfolioTemplateRequest) =>
      service.portfolio.createPortfolioTemplate(data),
    {
      onSuccess: () => {
        alert('포트폴리오 생성완료');
        setModal('포트폴리오 생성완료');
      },
      onError: (data: Error) => {
        console.log(data);
      },
    }
  );

  return {
    createPortfolio,
  };
}
