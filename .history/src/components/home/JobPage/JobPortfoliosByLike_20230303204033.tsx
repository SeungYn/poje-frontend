import { usePortfolioListsByLike } from '@src/hooks/member';
import { useParams } from 'react-router-dom';
import { JobPortfoliosContainer } from './common/commomJobStyledComponents';

export default function JobPortfoliosByLike() {
  const { page } = useParams<{ page: string }>();
  const { pageingUtil, pfAndMemberResp } = usePortfolioListsByLike(page!);
  return <JobPortfoliosContainer></JobPortfoliosContainer>;
}
