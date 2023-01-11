import styled from 'styled-components';
import {
  ImgContainer,
  MainButton,
} from '../../../styledComponents/styledComponents';

interface type {
  imgUrl: string;
}

export default function Write({ imgUrl }: type) {
  return (
    <ImgContainer imgUrl={imgUrl}>
      <MainButton>
        <span>포토폴리오</span>
        <span>작성하기</span>
      </MainButton>
    </ImgContainer>
  );
}
