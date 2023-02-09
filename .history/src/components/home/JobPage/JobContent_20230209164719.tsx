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
      <JobPortfolios />
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

const ProfileList = styled.ul`
  /* background-color: ${({ theme }) => theme.bgColor}; */
  margin: 0 auto;
  padding: 0.6rem 0.6rem;
  display: grid;
  grid-auto-rows: 340px;
  grid-template-columns: repeat(4, 1fr);
  overflow-y: auto;
  min-height: 0;
  gap: 2rem;
  max-width: 1600px;

  @media screen and (max-width: ${breakPoint.l}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: ${breakPoint.ss}) {
    grid-template-columns: repeat(1, 1fr);
  }

  /* @media screen and (max-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: ${breakPoint.ss}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${breakPoint.s}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: ${breakPoint.mmm}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: ${breakPoint.mm}) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (min-width: ${breakPoint.m}) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media screen and (min-width: ${breakPoint.l}) {
    grid-template-columns: repeat(7, 1fr);
  }
  @media screen and (min-width: ${breakPoint.ll}) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media screen and (min-width: ${breakPoint.lll}) {
    grid-template-columns: repeat(9, 1fr);
  } */
`;
