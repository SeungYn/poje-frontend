import styled from 'styled-components';

const PUBLICPATH = process.env.PUBLIC_URL;

export default function AuthSideBanner() {
  return <Container></Container>;
}

const Container = styled.article`
  width: 100%;
  background: black;
  background-image: url(${PUBLICPATH}/public_assets/loginBanner.jpg);
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 800px) {
    & {
      display: none;
    }
  }
`;
