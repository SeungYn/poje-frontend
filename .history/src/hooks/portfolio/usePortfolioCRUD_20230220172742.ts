import { useNavigate } from 'react-router-dom';
import service from '@src/service';
import { CreatePortfolioTemplateRequest } from '@src/service/types/portfolio';
import { useMutation } from '@tanstack/react-query';
import useModal from '../common/useModal';

export default function usePortfolioCRUD() {
  const { setModal } = useModal();
  const navigate = useNavigate();
  const { mutate: createPortfolio } = useMutation(
    (data: CreatePortfolioTemplateRequest) =>
      service.portfolio.createPortfolioTemplate(data),
    {
      onSuccess: (data) => {
        console.log(data);
        setModal('포트폴리오 생성완료');
      },
      onError: (data: Error) => {
        console.log(data.message);
        setModal(data.message);
      },
    }
  );

  return {
    createPortfolio,
  };
}