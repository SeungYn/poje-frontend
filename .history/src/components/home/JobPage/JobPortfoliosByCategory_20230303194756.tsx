import usePortfolioLists from '@src/hooks/job/usePortfolioLists';
import { useParams } from 'react-router-dom';
import {
  JobPortfolioListContainer,
  JobPortfoliosContainer,
} from './common/commomJobStyledComponents';
import JobPortfolioList from './JobPortfolioList';
import JobPortfolioPagingFooter from './JobPortfolioPagingFooter';

export default function JobPortfoliosByCategory() {
  const { type, page } = useParams<{ type: string; page: string }>();
  const { pageingUtil, pfAndMemberResp } = usePortfolioLists({
    jobName: type!,
    page: page!,
  });

  //param.type! as string
  return (
    <JobPortfoliosContainer>
      <JobPortfolioListContainer>
        <JobPortfolioList list={pfAndMemberResp} />
      </JobPortfolioListContainer>
      <JobPortfolioPagingFooter
        path={`/job/${type}`}
        {...pageingUtil}
        type={type!}
        currentPage={page!}
      />
    </JobPortfoliosContainer>
  );
}
