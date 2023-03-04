import { commonLoadingState } from '@src/store/common';
import { useRecoilValue } from 'recoil';
import LoadingSpiner from '../portfolio/common/LoadingSpiner';

export default function CommonLoading() {
  const isLoading = useRecoilValue(commonLoadingState);
  if (!isLoading) return <></>;
  return <LoadingSpiner text='로딩중' />;
}
