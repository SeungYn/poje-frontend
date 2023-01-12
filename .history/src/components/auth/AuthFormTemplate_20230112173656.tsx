import styled from 'styled-components';
import AuthLoginForm from './AuthLoginForm';
import AuthSideBanner from './AuthSideBanner';

export default function AuthFormTemplate() {
  return (
    <Container>
      <AuthSideBanner />
      <AuthLoginForm />
    </Container>
  );
}

const Container = styled.section`
  background-color: ${(props) => props.theme.bgColor};
  overflow: hidden;
  height: 100%;
  width: 100%;
  border-radius: 3rem;
  display: flex;
  flex-wrap: none;
`;
