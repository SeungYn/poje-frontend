import { commonLoadingState } from '@src/store/common';
import { useRecoilValue } from 'recoil';
import LoadingSpiner from '../portfolio/common/LoadingSpiner';
import styled from 'styled-components';

export default function CommonLoading() {
  const isLoading = useRecoilValue(commonLoadingState);

  return (
    <Wrapper>
      <LoadingSpiner text='로딩중' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  inset: 0 0 0 0;
`;
