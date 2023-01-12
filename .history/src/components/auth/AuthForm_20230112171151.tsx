import styled from 'styled-components';
import AuthSideBanner from './AuthSideBanner';

export default function AuthForm() {
  return (
    <Container>
      <AuthSideBanner />
    </Container>
  );
}

const Container = styled.section`
  background-color: ${(props) => props.theme.bgColor};
  height: 100%;
  width: 100%;
  border-radius: 3rem;
  display: flex;
  flex-wrap: none;
`;
