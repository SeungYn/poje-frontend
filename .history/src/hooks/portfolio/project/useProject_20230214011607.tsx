import { usePortfolioInfo } from "@src/context/PortfolioInfoContext";
import service from "@src/service";
import { BasicResponse } from "@src/service/types/basicResponse";
import { ProjectResponse, ProjectType, PutProjectRequest } from "@src/service/types/portfolio";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ProjectReference } from "typescript";

export default function useProject() {
	const queryClient = useQueryClient();
	const { portfolioId } = usePortfolioInfo();
	const { data } = useQuery(['portfolioProject', portfolioId], async () => {
		return await service.portfolio.getProjects({ portfolioId });
	} ,{
		suspense: true,
	});

	const createProject = useMutation<ProjectType, unknown, unknown, unknown>(
		async () => {
		return await service.portfolio.createProject({ portfolioId });
		},
		{
		onSuccess: (data) => {
			const projects = queryClient.getQueryData<ProjectType[]>(['portfolioProject', portfolioId])!;
			queryClient.setQueryData(['portfolioProject', portfolioId], [...projects, data])
		}
	});

	const putProject = useMutation<void, unknown, PutProjectRequest, unknown>(async (data) => {
		return await service.portfolio.putProject(data);
	}, {
		onMutate: ()=>{}
	});
	return {projects:data, createProject : createProject.mutate, putProject: putProject.mutate};
}

