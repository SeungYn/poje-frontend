import useMyInfo from '@src/hooks/member/useMyInfo';
import styled from 'styled-components';

export default function MiniProfile() {
  const { userInfo, isLoading } = useMyInfo();
  console.log(userInfo, isLoading);
  return <Container></Container>;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
