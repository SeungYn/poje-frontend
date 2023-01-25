import styled, { useTheme } from 'styled-components';
import PartHeader from '../common/PartHeader';
import * as S from '../styledComponents';
export default function ProjectsContainer() {
  const theme = useTheme();
  return (
    <Container>
      <PartHeader title={'Archiving'} color={theme.textColor} />
    </Container>
  );
}
const Container = styled(S.CommonSection)`
  background: ${({ theme }) => theme.mainColorLight};
`;
