import MemberModify from '@src/components/member/MemberModify';
import styled from 'styled-components';

export default function MemberModifyPage() {
  return (
    <Container>
      <MemberModify />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;
