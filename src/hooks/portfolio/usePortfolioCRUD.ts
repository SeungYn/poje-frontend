import { useNavigate } from 'react-router-dom';
import service from '@src/service';
import { CreatePortfolioTemplateRequest } from '@src/service/types/portfolio';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useModal from '../common/useModal';

export default function usePortfolioCRUD() {
  const queryClient = useQueryClient();
  const { setModal } = useModal();
  const navigate = useNavigate();
  const { mutate: createPortfolio } = useMutation(
    (data: CreatePortfolioTemplateRequest) =>
      service.portfolio.createPortfolioTemplate(data),
    {
      onSuccess: (data) => {
        const {
          data: {
            result: { portfolioId },
          },
        } = data;
        setModal('포트폴리오 생성완료', () => {
          navigate(`/portfolio/${portfolioId}`);
        });
        queryClient.invalidateQueries(['portfolios']);
        queryClient.invalidateQueries(['portfoliosList']);
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
