import usePortfolioLists from '@src/hooks/job/usePortfolioLists';
import { breakPoint } from '@src/styledComponents/media';
import styled from 'styled-components';
import { ProfileItemType } from './JobContent';
import ProfileItemRemaster from './ProfileItemRemaster';

export default function JobPortfolios() {
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
  const { jobList } = usePortfolioLists({ jobName: '전체' });
  return (
    <ProfileList>
      {items.map((item) => {
        return <ProfileItemRemaster {...item} />;
      })}
    </ProfileList>
  );
}

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
