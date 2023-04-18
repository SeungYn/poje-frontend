import styled from 'styled-components';
import { breakPoint } from '@src/styledComponents/media';

export const SubInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: ${breakPoint.mmm}) {
    flex-direction: column;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 800px;
  .swiper {
    height: 100%;
  }

  .slide-overlay {
    color: white;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-slide img {
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: white;
`;

export const ProjectWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  background: ${({ theme }) => theme.bgColor};
  border-radius: 1rem;
  padding: 2rem;
  flex-direction: row;
  /* flex-basis: 50%; */
  padding-bottom: 8rem;
  @media screen and (max-width: ${breakPoint.mmm}) {
    flex-direction: column-reverse;
  }
`;

export const ImgSectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  @media screen and (max-width: ${breakPoint.mmm}) {
    width: 100%;
    padding-bottom: 4rem;
  }
`;
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;
  @media screen and (max-width: ${breakPoint.mmm}) {
    width: 100%;
  }
`;

export const ProjectHeaderWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const ExplainSectionWrapper = styled.div``;

export const SubExplainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: auto;
  justify-items: flex-start;
  align-items: flex-start;
  gap: 0.3rem;
  @media screen and (max-width: ${breakPoint.mm}) {
    grid-template-columns: 1fr;
  }
`;

export const Property = styled.h4`
  font-size: ${({ theme }) => theme.fontLargeRegular};
  display: flex;
`;
