import { PortfoliosPagInfoType } from "@src/service/types/jobCard";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type PropsType = PortfoliosPagInfoType & { type: string };

export default function JobPortfolioPagingFooter(data: PropsType) {
	const { startPage, endPage, prev, next , page, type} = data;
	const pageArr = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
	const navigate = useNavigate();
	console.log(pageArr);
	console.log(0 / 5);
	const moveNextPage = (nowPage: number) => {
		const nextPage = (Math.floor((nowPage - 1) / 5) + 1) * 5 + 1;
		navigate(`/job/${type}/${nextPage}`);
	}

	const movePrevPage = (nowPage: number) => {
		const prevPage = (Math.floor((nowPage - 1) / 5) - 1) * 5 + 1;
		navigate(`/job/${type}/${prevPage}`);
	}
	return (
		<PageList>
			{prev && <PageSetMoveBtn onClick={() => movePrevPage(page)}>{'<'}</PageSetMoveBtn>}
			{pageArr.map(i => <li onClick={() => navigate(`/job/${type}/${i}`)}>{i}</li>)}
			{next && <PageSetMoveBtn onClick={() => moveNextPage(page)}>{'>'}</PageSetMoveBtn>}
		</PageList>
	);
}

const PageList = styled.ul`
display:flex;
font-size:40px;
`

const PageSetMoveBtn = styled.li`
	font-size:${({theme})=>theme.fontLargeSize};
`