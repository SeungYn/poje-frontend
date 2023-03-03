import useGetMyInfo from '@src/hooks/member/useGetMyInfo';
import styled from 'styled-components';

export default function MyInfoPage() {
  const data = useGetMyInfo();
  console.log(data);
  return <MyInfoPageContainer></MyInfoPageContainer>;
}

const MyInfoPageContainer = styled.section`
  width: 100%;
  height: 100%;
`;
