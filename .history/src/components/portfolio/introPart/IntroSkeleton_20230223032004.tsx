import styled from 'styled-components';

export default function IntroSkeleton() {
  return (
    <Container>
      <emptyDiv1></emptyDiv1>
    </Container>
  );
}

const Container = styled.div`
  padding: 4rem;
`;

const emptyDiv1 = styled.div`
  width: 100%;
  height: 40px;
`;
