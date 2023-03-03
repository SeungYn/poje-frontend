import { usePortfolioListsByLike } from '@src/hooks/member';
import { useParams } from 'react-router-dom';
import {
  JobPortfolioListContainer,
  JobPortfoliosContainer,
} from './common/commomJobStyledComponents';
import JobPortfolioList from './JobPortfolioListContainer';
import JobPortfolioPagingFooter from './JobPortfolioPagingFooter';

export default function JobPortfoliosByLike() {
  const { page } = useParams<{ page: string }>();
  const { pageingUtil, pfAndMemberResp } = usePortfolioListsByLike(page!);
  console.log(pfAndMemberResp);
  return (
    <JobPortfoliosContainer>
      <JobPortfolioListContainer>
        <JobPortfolioList list={pfAndMemberResp} />
      </JobPortfolioListContainer>
      <JobPortfolioPagingFooter
        path={`/job/like`}
        {...pageingUtil}
        currentPage={page!}
      />
    </JobPortfoliosContainer>
  );
}
