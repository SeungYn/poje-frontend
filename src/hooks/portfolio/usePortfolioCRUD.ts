import useConfirmModal from '@src/hooks/common/useConfirmModal';
import { useNavigate } from 'react-router-dom';
import service from '@src/service';
import {
  CreatePortfolioTemplateRequest,
  DeletePortfolioItemRequest,
} from '@src/service/types/portfolio';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useModal from '../common/useModal';

export default function usePortfolioCRUD() {
  const queryClient = useQueryClient();
  const { setModal } = useModal();
  const { setConfirmModal } = useConfirmModal();
  const navigate = useNavigate();
  const { mutate: createPortfolio } = useMutation(
    (data: CreatePortfolioTemplateRequest) =>
      service.portfolio.createPortfolioTemplate(data),
    {
      onSuccess: async (data) => {
        const {
          data: {
            result: { portfolioId },
          },
        } = data;
        queryClient.invalidateQueries(['portfolios']);
        queryClient.invalidateQueries(['portfoliosList']);
        queryClient.invalidateQueries(['myPortfolios']);
        setModal('포트폴리오 생성완료', () => {
          navigate(`/portfolio/${portfolioId}`);
        });
      },
      onError: (data: Error) => {
        console.log(data.message);
        setModal(data.message);
      },
    }
  );

  const { mutate: deletePortfolio } = useMutation(
    ({ portfolioId }: DeletePortfolioItemRequest) =>
      service.portfolio.deletePortfolio({ portfolioId }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['portfolios']);
        queryClient.invalidateQueries(['portfoliosList']);
        queryClient.invalidateQueries(['myPortfolios']);
      },
    }
  );

  const onDeletePortfolio = (portfolioId: string) => {
    setConfirmModal('정말로 삭제 하시겠습니까?', () => {
      deletePortfolio({ portfolioId });
    });
  };

  return {
    createPortfolio,
    onDeletePortfolio,
  };
}
