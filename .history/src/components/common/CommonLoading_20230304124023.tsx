import { commonLoadingState } from '@src/store/common';
import { useRecoilValue } from 'recoil';
import LoadingSpiner from '../portfolio/common/LoadingSpiner';

export default function CommonLoading() {
  const isLoading = useRecoilValue(commonLoadingState);

  return <LoadingSpiner text='로딩중' />;
}
