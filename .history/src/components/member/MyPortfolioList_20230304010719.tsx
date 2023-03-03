import { useGetMyPortfolios } from '@src/hooks/member';
import styled from 'styled-components';
import ProfileItemRemaster from '../home/JobPage/ProfileItemRemaster';

export default function MyPortfolioList() {
  const list = useGetMyPortfolios();

  return (
    <>
      {list.map((item) => (
        <div>
          <ProfileItemRemaster {...item}
        </div> />
      ))}
    </>
  );
}

const Test = styled.div``;