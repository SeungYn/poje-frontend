import styled, { DefaultTheme, keyframes } from 'styled-components';
import { ImgContainer } from '../../../styledComponents/styledComponents';

interface type {
  imgUrl: string;
}

export default function Resume({ imgUrl }: type) {
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
const MainButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.textAccentColor};
  border: 2px solid ${(props) => props.theme.textAccentColor};
  border-radius: 5rem;
  padding: 0.8rem 2rem;
  height: 9rem;

  & span {
    position: relative;
  }

  & span::after {
    position: absolute;
    content: '';
    width: 200px;
    height: 2px;
    background-color: ${(props) => props.theme.textAccentColor};
  }

  /* &:hover span {
    border-bottom: 2px solid ${(props) => props.theme.textAccentColor};
  } */
`;

const TextUnderlineAnimation = (props: DefaultTheme) => keyframes`
0%{
  border-bottom: 2px solid ${props.textAccentColor};
}


`;
