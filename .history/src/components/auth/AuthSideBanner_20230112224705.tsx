import styled from 'styled-components';

export default function AuthSideBanner() {
  return <Container></Container>;
}

const Container = styled.article`
  width: 100%;
  background: black;
  background-image: url(${process.env.PUBLIC_URL}/public_assets/write.jpg);
  background-size: cover;
  @media screen and (max-width: 500px) {
    & {
      display: none;
    }
  }
`;
