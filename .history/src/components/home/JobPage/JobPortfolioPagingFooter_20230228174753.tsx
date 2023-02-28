import { PortfoliosPagInfoType } from "@src/service/types/jobCard";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type PropsType = PortfoliosPagInfoType & { type: string , currentPage:string, searchKeyword?:string};

export default function JobPortfolioPagingFooter(data: PropsType) {
	const { startPage, endPage, totalPageCnt, prev, next , page, type, currentPage, searchKeyword} = data;
	const pageArr = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
	const navigate = useNavigate();
	
	const moveNextPage = (nowPage: number) => {
		const nextPage = (Math.floor((nowPage - 1) / 5) + 1) * 5 + 1;
		if (searchKeyword) {
			return navigate(`/job/${type}/searchKeyword/${searchKeyword}/${nextPage}`);
		}
		return navigate(`/job/${type}/${nextPage}`);
	}

	const movePrevPage = (nowPage: number) => {
		const prevPage = (Math.floor((nowPage - 1) / 5) - 1) * 5 + 1;
		if (searchKeyword) {
			return navigate(`/job/${type}/searchKeyword/${searchKeyword}/${prevPage}`);
		}
		return navigate(`/job/${type}/${prevPage}`);
	}

	const moverStartPage = () => {
		navigate(`/job/${type}/${1}`);
	}

	const moverEndPage = () => {
		navigate(`/job/${type}/${totalPageCnt}`);
	}

	
	return (
		<PageList>
		<PageSetMoveBtn onClick={() => moverStartPage()}>{'<<'}</PageSetMoveBtn>
			{prev && <PageSetMoveBtn onClick={() => movePrevPage(page)}>{'<'}</PageSetMoveBtn>}
			{pageArr.map(i => <PageItem key={`${type}/${searchKeyword}/${i}`} isCurrentPage={String(i) ===  currentPage  } onClick={() => navigate(`/job/${type}/${i}`)}>{i}</PageItem>)}
			{next && <PageSetMoveBtn onClick={() => moveNextPage(page)}>{'>'}</PageSetMoveBtn>}
			{totalPageCnt && <PageSetMoveBtn onClick={() => moverEndPage()}>{'>>'}</PageSetMoveBtn>}
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