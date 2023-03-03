import useJobSearch from '@src/hooks/job/useJobSearch';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { JobPortfoliosContainer } from './common/commomJobStyledComponents';
import JobPortfolioList from './JobPortfolioList';
import JobPortfolioPagingFooter from './JobPortfolioPagingFooter';

export default function JobPortfoliosBySearch() {
  const { type, page, keyword } = useParams<{
    type: string;
    page: string;
    keyword: string;
  }>();
  const { pageingUtil, pfAndMemberResp } = useJobSearch({
    jobName: type!,
    page: page!,
    keyword: keyword!,
  });
  return (
    <Container>
      <JobPortfoliosContainer>
        <JobPortfolioList list={pfAndMemberResp} />
      </JobPortfoliosContainer>
      <JobPortfolioPagingFooter
        path={`/job/${type}/search/${keyword}`}
        {...pageingUtil}
        type={type!}
        currentPage={page!}
        searchKeyword={keyword!}
      />
    </Container>
  );
}
