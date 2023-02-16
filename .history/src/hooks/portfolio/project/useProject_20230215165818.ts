import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import service from '@src/service';
import { BasicResponse } from '@src/service/types/basicResponse';
import {
  ProjectResponse,
  ProjectType,
  PutProjectRequest,
} from '@src/service/types/portfolio';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ProjectReference } from 'typescript';
import { CopiedProjectType } from './useProjectModify';

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

  const putProject = useMutation<void, unknown, CopiedProjectType, unknown>(
    async (data) => {
      const { prSkillList, prAwardInfo, prInfo, fileList } = data;
      return await service.portfolio.putProject({
        projectId: prInfo.projectId,
        prImgList: fileList,
        prInfo,
        prAwardInfo,
        prSkillList,
      });
    },
    {
      onMutate: () => {},
    }
  );
  return {
    projects: data!,
    createProject: createProject.mutate,
    putProject: putProject.mutate,
  };
}
