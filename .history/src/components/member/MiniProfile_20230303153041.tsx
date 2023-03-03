import useMyInfo from '@src/hooks/member/useMyInfo';

export default function MiniProfile() {
  const { userInfo, isLoading } = useMyInfo();
  console.log(userInfo, isLoading);
  return <div></div>;
}
