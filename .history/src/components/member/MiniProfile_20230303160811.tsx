import useMyInfo from '@src/hooks/member/useMyInfo';
import styled from 'styled-components';
import LoadingSpiner from '@src/components/portfolio/common/LoadingSpiner';

export default function MiniProfile() {
  const { userInfo, isLoading } = useMyInfo();
  console.log(userInfo, isLoading);
  return (
    <Container>
      {isLoading && <LoadingSpiner text={'로딩중'} />}
      <ProfileImg src={userInfo?.profileImg} />
      <NickName>{userInfo?.nickName}</NickName>
      <Email>{userInfo?.email}</Email>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const ProfileImg = styled.img`
  width: 8rem;
  height: 8rem;
`;

const NickName = styled.h2`
  font-size: ${({ theme }) => theme.fontLargeSize};
`;

const Email = styled.p``;
