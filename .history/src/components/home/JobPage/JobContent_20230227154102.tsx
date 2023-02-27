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
      <JobSearchForm />
      <ErrorBoundary FallbackComponent={CommonError}>
        <Suspense fallback={<LoadingSpiner text='로딩중' />}>
          {/* <JobPortfoliosByCategory /> */}
          <div>
            <div>
            <div>item1</div>
          <div>item1</div>
          <div>item1</div>
          <div>item1</div>
          <div>item1</div>
          <div>item1</div>
          <div>item1</div>
          <div>item1</div>
          <div>item1</div>
          <div>item1</div>
          </div>
          </div>
        </Suspense>
      </ErrorBoundary>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.section`
  position: relative;
  width: 100%;
  height:100%;
  padding: 1rem 2rem;
  max-width: 1600px;
  margin:0 auto;
  border:10px solid blue;
  display:flex;
  flex-direction: column;
  min-height:0;
  overflow: auto;

  @media screen and (max-width:${breakPoint.s}){
    padding: 0rem 0rem;
  }

  

  & > div{
    display:flex;
    position:relative;
    height:100%;
    border:10px solid yellow;
    flex-direction: column;
    overflow:hidden;
    min-height: 0;
    
  }

  & > div > div{
    border:10px solid green;
    height:100%;
    overflow:hidden;
    
  }

  & > div > div > div{
    background:skyblue;
    height:200px;
    width:200px;
  }
  
`;

