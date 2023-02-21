import { Link } from 'react-router-dom';
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
      <Link to='/job'>
        <MainButton>
          <span>포토폴리오</span>
          <span>작성하기</span>
        </MainButton>
      </Link>
    </ImgContainer>
  );
}
