import styled, { DefaultTheme } from 'styled-components';
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
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.textAccentColor};
  border: 2px solid ${(props) => props.theme.textAccentColor};
  border-radius: 5rem;
  padding: 0.8rem 2rem;
  height: 4rem;

  &:hover span {
    border-bottom: 2px solid ${(props) => props.theme.textAccentColor};
  }
`;
