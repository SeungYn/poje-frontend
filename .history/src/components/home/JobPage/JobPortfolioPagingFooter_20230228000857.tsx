import { PortfoliosPagInfoType } from "@src/service/types/jobCard";

type PropsType = PortfoliosPagInfoType & { type: string };

export default function JobPortfolioPagingFooter(data: PropsType) {
	const { startPage, endPage, prev, next } = data;
	const pageArr = Array.from({ length: endPage - startPage + 1}, (_, i) => startPage + i);
	console.log(pageArr);
	return (
		<div>
			
		</div>
	);
}

