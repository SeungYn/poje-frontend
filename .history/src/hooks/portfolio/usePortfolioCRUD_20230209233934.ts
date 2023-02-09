import service from "@src/service";
import { createPortfolioTemplateRequest } from "@src/service/types/portfolio";
import { useMutation } from "@tanstack/react-query";


export default function usePortfolioCRUD() {

	const {mutate:createPortfolio} = useMutation((data:createPortfolioTemplateRequest)=> service.portfolio.createPortfolioTemplate(data), {onSuccess : ()=>{alert('포트폴리오 생성완료')}})

	return (
		
	);
}


