import { useGetMyPortfolios } from '@src/hooks/member';
import styled from 'styled-components';
import ProfileItemRemaster from '../home/JobPage/ProfileItemRemaster';
import usePortfolioCRUD from '@src/hooks/portfolio/usePortfolioCRUD';

export default function MyPortfolioList() {
  const list = useGetMyPortfolios();
  const { onDeletePortfolio } = usePortfolioCRUD();

  return (
    <>
      {list.map((item) => (
        <Test key={item.portfolioId + item.nickName}>
          <ProfileItemRemaster
            {...item}
            onDeletePortfolio={onDeletePortfolio}
          />
        </Test>
      ))}
    </>
  );
}

const Test = styled.div`
  flex-shrink: 0;
  flex-basis: 240px;
`;
