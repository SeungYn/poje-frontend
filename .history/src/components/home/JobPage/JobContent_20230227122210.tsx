import CommonError from '@src/components/errorComponent/CommonError';
import LoadingSpiner from '@src/components/portfolio/common/LoadingSpiner';
import { breakPoint } from '@src/styledComponents/media';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import JobPortfoliosByCategory from './JobPortfoliosByCategory';
import JobSearchForm from './JobSearchForm';

export default function JobContent() {
  return (
    <ProfileContainer>
     
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
  max-width: 1600px;
  margin:0 auto;

  @media screen and (max-width:${breakPoint.s}){
    padding: 0rem 0rem;
  }
`;

