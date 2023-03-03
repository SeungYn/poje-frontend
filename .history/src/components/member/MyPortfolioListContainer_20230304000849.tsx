import styled from 'styled-components';
import MyPortfolioList from './MyPortfolioList';

export default function MyPortfolioListContainer() {
  return (
    <Container>
      <MyPortfolioList />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
