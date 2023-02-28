import CommonError from '@src/components/errorComponent/CommonError';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import JobPortfoliosByCategory from './JobPortfoliosByCategory';
import JobSearchForm from './JobSearchForm';

export default function JobSearchContent() {
  return (
    <ProfileContainer>
      <JobSearchForm />
      <ErrorBoundary FallbackComponent={CommonError}>
        <Suspense fallback={<div>로딩중</div>}>
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
   max-width: 1600px;
  margin:0 auto;
  display:flex;
  flex-direction: column;
  @media screen and (max-width:${breakPoint.s}){
    padding: 0rem 0rem;
  }
`;
