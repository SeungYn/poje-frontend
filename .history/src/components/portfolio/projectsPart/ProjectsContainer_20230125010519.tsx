import styled, { useTheme } from 'styled-components';
import PartHeader from '../common/PartHeader';
import * as S from '../styledComponents';
export default function ProjectsContainer() {
  const theme = useTheme();
  return (
    <Container>
      <PartHeader title={'Projects'} color={theme.textColor} />
      <Content></Content>
    </Container>
  );
}
const Container = styled(S.CommonSection)`
  background: ${({ theme }) => theme.mainColorLight};
`;

const Content = styled.div`
  background: ${({ theme }) => theme.bgColor};
`;
