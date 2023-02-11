import styled from 'styled-components';

export const Intro = styled.section<{ imgUrl: string }>`
  position: relative;
  padding: 10rem 6rem 6rem 6rem;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-image: url(${({ imgUrl }) => imgUrl});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: brightness(0.5);
    z-index: -3;
  }
`;
