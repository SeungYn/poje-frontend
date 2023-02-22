import styled from 'styled-components';

export default function IntroSkeleton() {
  return (
    <Container>
      <EmptyDiv1></EmptyDiv1>
      <EmptyDiv2></EmptyDiv2>
    </Container>
  );
}

const Container = styled.div`
  padding: 8rem 4rem;
  background: black;
`;

const EmptyDiv1 = styled.div`
  width: 100%;
  height: 50px;
  background: white;
  margin: 0 auto;
`;

const EmptyDiv2 = styled.div`
  width: 80%;
  height: 100px;
  background: white;
  margin: 0 auto;
  margin-top: 40px;
`;
