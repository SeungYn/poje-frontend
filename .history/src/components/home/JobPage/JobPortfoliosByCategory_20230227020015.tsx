import usePortfolioLists from '@src/hooks/job/usePortfolioLists';
import { breakPoint } from '@src/styledComponents/media';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import JobPortfolioList from './JobPortfolioList';

export default function JobPortfoliosByCategory() {
  const { type } = useParams<{ type: string }>();
  const { jobList } = usePortfolioLists({ jobName: type! });
  //param.type! as string
  return (
    <JobPortfolioList list={jobList} />
  );
}

