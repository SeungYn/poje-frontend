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
  height: 80%;
  min-height: 500px;
  width: 100%;
  .swiper {
    height: 100%;
  }

  @media screen and (max-width: ${breakPoint.mmm}) {
    min-height: 400px;
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
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  background: ${({ theme }) => theme.bgColor};
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: ${breakPoint.mmm}) {
    flex-direction: column-reverse;
  }
`;

export const ImgSectionWrapper = styled.div`
  position: relative;
  width: 50%;
  @media screen and (max-width: ${breakPoint.mmm}) {
    width: 100%;
    padding-bottom: 4rem;
  }
`;
export const DescriptionWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;

export const ProjectHeaderWrapper = styled.div`
  text-align: center;
`;

export const ExplainSectionWrapper = styled.div``;

export const SubExplainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: auto;
  justify-items: center;
  align-items: flex-start;
  @media screen and (max-width: ${breakPoint.mm}) {
    grid-template-columns: 1fr;
  }
`;
