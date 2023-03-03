import { useGetMyPortfolios } from '@src/hooks/member';
import ProfileItemRemaster from '../home/JobPage/ProfileItemRemaster';

export default function MyPortfolioList() {
  const list = useGetMyPortfolios();

  return (
    <>
      {list.map((item) => (
        <ProfileItemRemaster {...item} />
      ))}
    </>
  );
}
