import styled from 'styled-components';
import PortfolioLike from './PortfolioLike';

export default function AsideGroup() {
  return (
    <Container>
      <PortfolioLike />
    </Container>
  );
}

const Container = styled.aside`
  position: fixed;
  bottom: 4rem;
  left: 2rem;
`;
