import { Suspense } from 'react';
import styled from 'styled-components';
import JobPortfolios from './JobPortfoliosByCategory';
import JobSearchForm from './JobSearchForm';

export interface ProfileItemType {
  titleImg: string;
  title: string;
  description: string;
  like: number;
}

export default function JobContent() {
  return (
    <ProfileContainer>
      <JobSearchForm />
      <Suspense fallback={<div>로딩중</div>}>
        <JobPortfolios />
      </Suspense>
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
