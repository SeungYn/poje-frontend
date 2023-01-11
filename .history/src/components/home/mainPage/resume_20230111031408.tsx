import styled from 'styled-components';

interface type {
  imgUrl: string;
}

export default function Resume({ imgUrl }: type) {
  return <ImgContainer imgUrl={imgUrl}></ImgContainer>;
}

const ImgContainer = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 100vh;
  background-image: url(${'ff'});
`;
