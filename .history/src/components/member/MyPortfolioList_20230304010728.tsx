import { useGetMyPortfolios } from '@src/hooks/member';
import styled from 'styled-components';
import ProfileItemRemaster from '../home/JobPage/ProfileItemRemaster';

export default function MyPortfolioList() {
  const list = useGetMyPortfolios();

  return (
    <>
      {list.map((item) => (
        <Test>
          <ProfileItemRemaster {...item} />
        </Test>
      ))}
    </>
  );
}

const Test = styled.div``;
