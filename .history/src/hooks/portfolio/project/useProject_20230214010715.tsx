import { usePortfolioInfo } from "@src/context/PortfolioInfoContext";
import service from "@src/service";
import { ProjectResponse, ProjectType } from "@src/service/types/portfolio";
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

	
	return {projects:data};
}

