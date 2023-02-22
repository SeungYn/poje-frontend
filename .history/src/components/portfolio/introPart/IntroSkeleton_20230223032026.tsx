import styled from 'styled-components';

export default function IntroSkeleton() {
  return (
    <Container>
      <EmptyDiv1></EmptyDiv1>
    </Container>
  );
}

const Container = styled.div`
  padding: 4rem;
`;

const EmptyDiv1 = styled.div`
  width: 100%;
  height: 40px;
`;

const EmptyDiv2 = styled.div`
  width: 80%;
  height: 100px;
`;
