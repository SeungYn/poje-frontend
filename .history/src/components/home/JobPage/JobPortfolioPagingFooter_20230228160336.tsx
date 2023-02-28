import { PortfoliosPagInfoType } from "@src/service/types/jobCard";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type PropsType = PortfoliosPagInfoType & { type: string , currentPage:string, searchKeyword?:string};

export default function JobPortfolioPagingFooter(data: PropsType) {
	const { startPage, endPage, prev, next , page, type, currentPage, searchKeyword} = data;
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
			{pageArr.map(i => <PageItem key={`${type}/${searchKeyword}/${i}`} isCurrentPage={String(i) ===  currentPage  } onClick={() => navigate(`/job/${type}/${i}`)}>{i}</PageItem>)}
			{next && <PageSetMoveBtn onClick={() => moveNextPage(page)}>{'>'}</PageSetMoveBtn>}
		</PageList>
	);
}

const PageList = styled.ul`
	width:100%;
	display:flex;
	align-items: center;
	justify-content: center;
	gap:1rem;
	color: ${({theme})=>theme.textColor};
	& > li{
		cursor:pointer;
	}
`

const PageSetMoveBtn = styled.li`
	font-size:${({theme})=>theme.fontLargeSize};
`

const PageItem = styled.li<{isCurrentPage:boolean}>`
	font-size:${({ theme }) => theme.fontLargeRegular};
	flex-basis: 3rem;
	padding:0.4rem 0.8rem;
	border:${({ isCurrentPage }) => isCurrentPage ? '2px solid black' : 'none'};
	border-radius:50%;
	text-align: center;
	
`