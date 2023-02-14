import styled from 'styled-components';
import { breakPoint } from '@src/styledComponents/media';

export const SubInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: ${breakPoint.mmm}) {
    flex-direction: column;
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 80%;
  min-height: 400px;
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
`;

export const ImgSectionWrapper = styled.div`
  position: relative;
  width: 50%;
`;
export const DescriptionWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;
