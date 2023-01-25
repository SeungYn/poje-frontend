import styled from 'styled-components';
import * as S from '../styledComponents';
export default function ProjectsContainer() {
  return <Container></Container>;
}
const Container = styled(S.CommonSection)`
  background: ${({ theme }) => theme.colorDarkBlue};
`;
