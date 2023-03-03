import useJobSearch from '@src/hooks/job/useJobSearch';
import { useParams } from 'react-router-dom';
import {
  JobPortfolioListContainer,
  JobPortfoliosContainer,
} from './common/commomJobStyledComponents';
import JobPortfolioList from './JobPortfolioList';
import JobPortfolioPagingFooter from './JobPortfolioPagingFooter';
import JobSearchForm from './JobSearchForm';

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
    <JobPortfoliosContainer>
      <JobSearchForm />
      <JobPortfolioListContainer>
        <JobPortfolioList list={pfAndMemberResp} />
      </JobPortfolioListContainer>
      <JobPortfolioPagingFooter
        path={`/job/${type}/search/${keyword}`}
        {...pageingUtil}
        type={type!}
        currentPage={page!}
        searchKeyword={keyword!}
      />
    </JobPortfoliosContainer>
  );
}
