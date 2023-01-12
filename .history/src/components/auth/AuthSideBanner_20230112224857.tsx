import styled from 'styled-components';

export default function AuthSideBanner() {
  return <Container></Container>;
}

const Container = styled.article`
  width: 100%;
  background: black;
  background-image: url(${process.env
    .PUBLIC_URL as string}/public_assets/loginBanner.jpg);

  background-size: cover;
  background-position: center;
  @media screen and (max-width: 500px) {
    & {
      display: none;
    }
  }
`;
