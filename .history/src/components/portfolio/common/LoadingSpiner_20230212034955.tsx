import styled from 'styled-components';

export default function LoadingSpiner() {
  return <Container></Container>;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 20;
`;

const loadingSpin = styled.div`
  width: 2rem;
  height: 2rem;
  background: white;
`;
