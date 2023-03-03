import { useGetMyPortfolios } from '@src/hooks/member';
import styled from 'styled-components';
import ProfileItemRemaster from '../home/JobPage/ProfileItemRemaster';

export default function MyPortfolioList() {
  const list = useGetMyPortfolios();

  return (
    <>
      {list.map((item) => (
        <Test key={item.portfolioId + item.nickName}>
          <ProfileItemRemaster {...item} />
        </Test>
      ))}
    </>
  );
}

const Test = styled.div`
  flex-shrink: 0;
  flex-basis: 200px;
`;
