import usePortfolioLists from '@src/hooks/job/usePortfolioLists';
import { breakPoint } from '@src/styledComponents/media';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProfileItemRemaster from './ProfileItemRemaster';
import { v4 as uuidv4 } from 'uuid';

export default function JobPortfoliosByCategory() {
  const { type } = useParams<{ type: string }>();
  const { jobList } = usePortfolioLists({ jobName: type! });
  //param.type! as string
  return (
    <ProfileList>
      {jobList.map((item) => {
        return <ProfileItemRemaster key={uuidv4()} {...item} />;
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
