import { useParams } from 'react-router-dom';
import { JobPortfoliosContainer } from './common/commomJobStyledComponents';

export default function JobPortfoliosByLike() {
  const { page } = useParams<{ page: string }>();
  return <JobPortfoliosContainer></JobPortfoliosContainer>;
}
