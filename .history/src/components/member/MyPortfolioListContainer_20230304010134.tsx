import { breakPoint } from '@src/styledComponents/media';
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
  width: 100%;
  display: flex;
`;

const GridList = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  background: ${({ theme }) => theme.bgSemiDarkColor};
  grid-template-columns: repeat(3, 240px);
  grid-auto-rows: 376px;
  justify-content: center;
  grid-gap: 1rem;
  padding: 2rem 1rem;

  @media screen and (max-width: ${breakPoint.s}) {
    grid-template-columns: repeat(1, 100%);
  }

  @media screen and (min-width: ${breakPoint.mm}) {
    grid-template-columns: repeat(4, 240px);
  }
`;
