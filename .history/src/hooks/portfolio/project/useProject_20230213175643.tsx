import { usePortfolioInfo } from "@src/context/PortfolioInfoContext";
import { useQuery } from "@tanstack/react-query";

export default function useProject() {
	const { portfolioId } = usePortfolioInfo();
	const { data } = useQuery(['portfolioProject', portfolioId], {
		suspense:true,
	})
	return (
		<div>
			
		</div>
	);
}

