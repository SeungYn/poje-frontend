import { PortfoliosPagInfoType } from "@src/service/types/jobCard";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type PropsType = PortfoliosPagInfoType & { type: string };

export default function JobPortfolioPagingFooter(data: PropsType) {
	const { startPage, endPage, prev, next , type} = data;
	const pageArr = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
	const navigate = useNavigate();
	console.log(pageArr);
	return (
		<PageList>
			{pageArr.map(i => <li onClick={()=>navigate(`/job/${type}/${i}`) }>{ i}</li>)}
		</PageList>
	);
}

const PageList = styled.ul`
display:flex;
font-size:40px;
`
