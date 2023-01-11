import styled from 'styled-components';

interface type {
  imgUrl: string;
}

export default function Resume({ imgUrl }: type) {
  return <ImgContainer></ImgContainer>;
}

const ImgContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url({imgUrl});
`;
