import styled from 'styled-components';
import { breakPoint } from '../../../styledComponents/media';
import JobSearchForm from './JobSearchForm';
import ProfileItemRemaster from './ProfileItemRemaster';

export interface ProfileItemType {
  titleImg: string;
  title: string;
  description: string;
  like: number;
}

export default function JobContent() {
  const items: ProfileItemType[] = [
    {
      titleImg: '',
      title: '안녕씹세요',
      description: '유승윤',
      like: 0,
    },
    {
      titleImg: '',
      title: '좆런트엔드',
      description: '유승윤',
      like: 10,
    },
    {
      titleImg: '',
      title: '안녕씹세요',
      description: '유승윤',
      like: 0,
    },
    {
      titleImg: '',
      title: '안녕씹세요',
      description: '유승윤',
      like: 0,
    },
    {
      titleImg: '',
      title: '안녕씹세요',
      description: '유승윤',
      like: 0,
    },
    {
      titleImg: '',
      title: '좆런트엔드',
      description: '유승윤',
      like: 10,
    },
    {
      titleImg: '',
      title: '안녕씹세요',
      description: '유승윤',
      like: 0,
    },
    {
      titleImg: '',
      title: '안녕씹세요',
      description: '유승윤',
      like: 0,
    },
    {
      titleImg: '',
      title: '안녕씹세요',
      description: '유승윤',
      like: 0,
    },
  ];
  return (
    <ProfileContainer>
      <JobSearchForm />
      <ProfileList>
        {items.map((item) => {
          return <ProfileItemRemaster {...item} />;
        })}
      </ProfileList>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.section`
  height: 100%;
  width: 100%;
  padding: 2rem 2rem;
  overflow: auto;
`;

const ProfileList = styled.ul`
  /* background-color: ${({ theme }) => theme.bgColor}; */
  margin: 0 auto;
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
