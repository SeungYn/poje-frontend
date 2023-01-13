import styled, { DefaultTheme, keyframes } from 'styled-components';
import {
  ImgContainer,
  MainButton,
} from '../../../styledComponents/styledComponents';

interface type {
  imgUrl: string;
}

export default function Resume({ imgUrl }: type) {
  console.log(imgUrl);
  return (
    <>
      <ImgContainer imgUrl={imgUrl}>
        <MainButton>
          <span>포토폴리오</span>
          <span>들러보기</span>
        </MainButton>
      </ImgContainer>
    </>
  );
}
