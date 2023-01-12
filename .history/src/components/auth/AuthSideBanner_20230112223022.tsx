import styled from 'styled-components';

export default function AuthSideBanner() {
  return <Container></Container>;
}

const Container = styled.article`
  width: 100%;
  background: black;
  @media screen and (max-width: 500px) {
    & {
      display: none;
    }
  }
`;
