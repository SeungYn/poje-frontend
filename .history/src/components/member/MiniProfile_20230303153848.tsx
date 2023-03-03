import useMyInfo from '@src/hooks/member/useMyInfo';
import styled from 'styled-components';
import LoadingSpiner from '@src/components/portfolio/common/LoadingSpiner';

export default function MiniProfile() {
  const { userInfo, isLoading } = useMyInfo();
  console.log(userInfo, isLoading);
  return (
    <Container>{isLoading && <LoadingSpiner text={'로딩중'} />}</Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
