import { Suspense } from 'react';
import styled from 'styled-components';
import { breakPoint } from '../../../styledComponents/media';
import JobPortfolios from './JobPortfolios';
import JobSearchForm from './JobSearchForm';
import ProfileItemRemaster from './ProfileItemRemaster';

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
