import { PortfoliosPagInfoType } from '@src/service/types/jobCard';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type PropsType = PortfoliosPagInfoType & {
  type?: string;
  currentPage: string;
  searchKeyword?: string;
  path: string;
};

export default function JobPortfolioPagingFooter(data: PropsType) {
  const {
    startPage,
    endPage,
    totalPageCnt,
    prev,
    next,
    page,
    type = '',
    currentPage,
    searchKeyword,
    path,
  } = data;
  const pageArr = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
  const navigate = useNavigate();

  const moveNextPage = (nowPage: number) => {
    const nextPage = (Math.floor((nowPage - 1) / 5) + 1) * 5 + 1;
    return navigate(`${path}/${nextPage}`);
  };

  const movePrevPage = (nowPage: number) => {
    const prevPage = (Math.floor((nowPage - 1) / 5) - 1) * 5 + 1;
    return navigate(`${path}/${prevPage}`);
  };

  const moverStartPage = () => {
    return navigate(`${path}/${1}`);
  };

  const moveEndPage = () => {
    return navigate(`${path}/${totalPageCnt}`);
  };

  const moveNumberPage = (page: number) => {
    return navigate(`${path}/${page}`);
  };

  return (
    <PageList>
      <PageSetMoveBtn
        data-testid='prev-end-btn'
        onClick={() => moverStartPage()}
      >
        {'<<'}
      </PageSetMoveBtn>
      {prev && (
        <PageSetMoveBtn
          data-testid='prev-btn'
          onClick={() => movePrevPage(page)}
        >
          {'<'}
        </PageSetMoveBtn>
      )}
      {pageArr.map((i) => (
        <PageItem
          key={`${type}/${searchKeyword}/${i}`}
          isCurrentPage={String(i) === currentPage}
          onClick={() => moveNumberPage(i)}
        >
          {i}
        </PageItem>
      ))}
      {next && (
        <PageSetMoveBtn
          data-testid='next-btn'
          onClick={() => moveNextPage(page)}
        >
          {'>'}
        </PageSetMoveBtn>
      )}
      {totalPageCnt && (
        <PageSetMoveBtn
          data-testid='next-end-btn'
          onClick={() => moveEndPage()}
        >
          {'>>'}
        </PageSetMoveBtn>
      )}
    </PageList>
  );
}

const PageList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: ${({ theme }) => theme.textColor};
  & > li {
    cursor: pointer;
  }
`;

const PageSetMoveBtn = styled.li`
  font-size: ${({ theme }) => theme.fontLargeSize};
`;

const PageItem = styled.li<{ isCurrentPage: boolean }>`
  font-size: ${({ theme }) => theme.fontLargeRegular};
  flex-basis: 3rem;
  padding: 0.4rem 0.8rem;
  border: ${({ isCurrentPage }) =>
    isCurrentPage ? '2px solid black' : 'none'};
  border-radius: 50%;
  text-align: center;
`;
