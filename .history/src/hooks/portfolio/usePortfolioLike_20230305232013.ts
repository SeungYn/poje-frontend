import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import service from '@src/service';
import { PortfolioLikeType } from '@src/service/types/portfolio';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export default function usePortfolioLike() {
  const { portfolioId } = usePortfolioInfo();
  const queryClient = useQueryClient();
  const { data } = useQuery(['portfolioLike', portfolioId], async () =>
    service.portfolio.getPortfolioLike({ portfolioId })
  );

  const handleLikeClick = useMutation(
    async () => service.portfolio.postPortfolioLike({ portfolioId }),
    {
      onMutate: () => {
        const currentLike = queryClient.getQueryData<PortfolioLikeType>([
          'portfolioLike',
          portfolioId,
        ])!;

        if (!currentLike.likeStatus) {
          queryClient.setQueryData(['portfolioLike', portfolioId], {
            likeStatus: true,
            likeCount: currentLike.likeCount + 1,
          });
        } else {
          queryClient.setQueryData(['portfolioLike', portfolioId], {
            likeStatus: false,
            likeCount: currentLike.likeCount - 1,
          });
        }
      },
      onSuccess: () => {
        //성공하면 포트폴리오 좋아요 리스트 refatch
        queryClient.invalidateQueries(['portfoliosListWithLike']);
      },
    }
  );

  return { data, handleLikeClick: handleLikeClick.mutate };
}
