import useGetMyInfo from '@src/hooks/member/useGetMyInfo';
import styled from 'styled-components';

export default function MyInfoPage() {
  const data = useGetMyInfo();
  console.log(data);
  return <MyInfoPageContainer></MyInfoPageContainer>;
}

const MyInfoPageContainer = styled.section`
  background-color: ${(props) => props.theme.bgColor};
  width: 100%;
  height: 100%;
`;
