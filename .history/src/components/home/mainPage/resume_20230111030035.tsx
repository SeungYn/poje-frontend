import styled from 'styled-components';

interface type {
  imgUrl: string;
}

export default function resume({ imgUrl }: type) {
  return <ImgContainer></ImgContainer>;
}

const ImgContainer = styled.div`
  background-image: url(imgUrl);
`;
