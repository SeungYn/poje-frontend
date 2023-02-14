import styled from 'styled-components';
import { breakPoint } from '@src/styledComponents/media';
export const SubInfo = styled.div`
  display: flex;

  & screen and (max-width : ${breakPoint.mmm}) {
    flex-direction: column;
  }
`;
