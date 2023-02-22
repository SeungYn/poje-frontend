import CommonError from '@src/components/errorComponent/CommonError';
import LoadingSpiner from '@src/components/portfolio/common/LoadingSpiner';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import JobPortfoliosByCategory from './JobPortfoliosByCategory';
import JobSearchForm from './JobSearchForm';

export default function JobContent() {
  return (
    <ProfileContainer>
      <JobSearchForm />
      <ErrorBoundary FallbackComponent={CommonError}>
        <Suspense fallback={<LoadingSpiner text='로딩중' />}>
          <JobPortfoliosByCategory />
        </Suspense>
      </ErrorBoundary>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 1rem 2rem;
  overflow: auto;
`;
console.log();
