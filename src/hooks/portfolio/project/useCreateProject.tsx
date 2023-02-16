import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import service from '@src/service';
import { ProjectType } from '@src/service/types/portfolio';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useCreateProject() {
  const queryClient = useQueryClient();
  const { portfolioId } = usePortfolioInfo();
  const createProject = useMutation<ProjectType, unknown, void, unknown>(
    async () => {
      return await service.portfolio.createProject({ portfolioId });
    },
    {
      onSuccess: (data) => {
        const projects = queryClient.getQueryData<ProjectType[]>([
          'portfolioProject',
          portfolioId,
        ])!;
        queryClient.setQueryData(
          ['portfolioProject', portfolioId],
          [...projects, data]
        );
      },
    }
  );
  return createProject.mutate;
}
