import MiniProfile from '@src/components/member/MiniProfile';
import useGetMyInfo from '@src/hooks/member/useMyInfo';
import styled from 'styled-components';

export default function MyInfoPage() {
  return (
    <MyInfoPageContainer>
      <MiniProfile />
    </MyInfoPageContainer>
  );
}

const MyInfoPageContainer = styled.section`
  width: 100%;
  height: 100%;
`;
