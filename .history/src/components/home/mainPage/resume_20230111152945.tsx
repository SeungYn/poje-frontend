import styled from 'styled-components';
import { ImgContainer } from '../../../styledComponents/styledComponents';

interface type {
  imgUrl: string;
}

export default function Resume({ imgUrl }: type) {
  return (
    <>
      <ImgContainer imgUrl={imgUrl}>
        <MainButton>
          포토폴리오
          <br />
          들러보기
        </MainButton>
      </ImgContainer>
    </>
  );
}
const MainButton = styled.button``;
