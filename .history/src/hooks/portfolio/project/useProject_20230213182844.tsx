import { usePortfolioInfo } from "@src/context/PortfolioInfoContext";
import service from "@src/service";
import { ProjectType } from "@src/service/types/portfolio";
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

	const createProject = useMutation(async () => {
		return await service.portfolio.createProject({ portfolioId });
	}, {
		onSuccess: (data:ProjectReference)=>{
			const projects = queryClient.getQueryData<ProjectType[]>(['portfolioProject', portfolioId])!;
			queryClient.setQueryData(['portfolioProject', portfolioId], [...projects, ])
		}
	})
	return {projects:data};
}

