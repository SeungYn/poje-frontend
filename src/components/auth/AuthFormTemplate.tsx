import styled from 'styled-components';
import AuthLoginForm from './AuthLoginForm';
import AuthSideBanner from './AuthSideBanner';
import AuthSignUpForm from './AuthSignUpForm';

interface type {
  path: string;
}

export default function AuthFormTemplate({ path }: type) {
  return (
    <Container>
      <AuthSideBanner />
      {path === 'login' ? <AuthLoginForm /> : <AuthSignUpForm />}
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
