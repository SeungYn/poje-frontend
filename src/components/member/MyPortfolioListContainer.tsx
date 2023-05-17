import { Suspense } from 'react';
import styled from 'styled-components';
import LoadingSpiner from '../portfolio/common/LoadingSpiner';
import MyPortfolioList from './MyPortfolioList';

export default function MyPortfolioListContainer() {
  return (
    <Container>
      <Category>내 포트폴리오 리스트</Category>
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Category = styled.h2`
  color: ${({ theme }) => theme.textColor};
`;

const FlexList = styled.div`
  display: flex;
  overflow-x: auto;
  flex-wrap: nowrap;
  gap: 0.8rem;
  padding: 2rem;
`;
