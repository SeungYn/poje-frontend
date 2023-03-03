import MiniProfile from '@src/components/member/MiniProfile';
import MyPortfolioList from '@src/components/member/MyPortfolioList';
import styled from 'styled-components';

export default function MyInfoPage() {
  return (
    <MyInfoPageContainer>
      <MiniProfile />
      <MyPortfolioList />
    </MyInfoPageContainer>
  );
}

const MyInfoPageContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
