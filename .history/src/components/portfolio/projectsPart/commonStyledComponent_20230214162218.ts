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
