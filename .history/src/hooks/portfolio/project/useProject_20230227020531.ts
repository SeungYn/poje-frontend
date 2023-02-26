import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import service from '@src/service';
import {
  ProjectType,
} from '@src/service/types/portfolio';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';


export default function useProject() {
  const queryClient = useQueryClient();
  const { portfolioId } = usePortfolioInfo();
  const { data } = useQuery(
    ['portfolioProject', portfolioId],
    async () => {
      return await service.portfolio.getProjects({ portfolioId });
    },
    {
      suspense: true,
    }
  );

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

  //인자로 copiedProject와 loadingToggle, modifyToggle 받아옴
  // const putProject = useMutation<void, unknown, PutProjectType, unknown>(
  //   async ({ copiedProject, loadingToggle, modifyToggle }) => {
  //     const { prSkillList, prAwardInfo, prInfo, fileList } = copiedProject;
  //     return await service.portfolio.putProject({
  //       projectId: prInfo.projectId,
  //       prImgList: fileList,
  //       prInfo,
  //       prAwardInfo,
  //       prSkillList,
  //     });
  //   },
  //   {
  //     onMutate: ({ copiedProject, loadingToggle, modifyToggle }) => {
  //       loadingToggle();
  //     },
  //   }
  // );
  return {
    projects: data!,
    createProject: createProject.mutate,
    //putProject: putProject.mutate,
  };
}
