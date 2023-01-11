import styled from 'styled-components';
import { ImgContainer } from '../../../styledComponents/styledComponents';

interface type {
  imgUrl: string;
}

export default function Resume({ imgUrl }: type) {
  return (
    <>
      <ImgContainer imgUrl={imgUrl}></ImgContainer>
    </>
  );
}
