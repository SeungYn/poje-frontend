import { Suspense } from 'react';
import styled from 'styled-components';
import LoadingSpiner from '../portfolio/common/LoadingSpiner';
import MyPortfolioList from './MyPortfolioList';

export default function MyPortfolioListContainer() {
  return (
    <Container>
      <GridList>
        <Suspense fallback={<LoadingSpiner text={'로딩중'} />}>
          <MyPortfolioList />
        </Suspense>
      </GridList>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const GridList = styled.div`
  position: relative;
  height: 100%;
`;
