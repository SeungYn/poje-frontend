import { usePortfolioInfo } from "@src/context/PortfolioInfoContext";
import service from "@src/service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function useProject() {
	const queryClient = useQueryClient();
	const { portfolioId } = usePortfolioInfo();
	const { data } = useQuery(['portfolioProject', portfolioId], {
		suspense: true,
	});

	const createProject = useMutation(async () => {
		return await service.portfolio.createProject({ portfolioId });
	}, {
		onSuccess: (){
			
		}
	})
	return {projects:data};
}

