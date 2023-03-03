import { breakPoint } from '@src/styledComponents/media';
import { Suspense } from 'react';
import styled from 'styled-components';
import LoadingSpiner from '../portfolio/common/LoadingSpiner';
import MyPortfolioList from './MyPortfolioList';

export default function MyPortfolioListContainer() {
  return (
    <Container>
      <FlexList>
        <Suspense fallback={<LoadingSpiner text={'로딩중'} />}>
          <MyPortfolioList />
        </Suspense>
      </FlexList>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FlexList = styled.div`
  display: flex;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch; /* 끝에서 바운스 되도록*/
  scroll-snap-type: x mandatory;
`;
