import styled from 'styled-components';
import { breakPoint } from '@src/styledComponents/media';
export const SubInfo = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: ${breakPoint.mmm}) {
    flex-direction: column;
  }
`;
