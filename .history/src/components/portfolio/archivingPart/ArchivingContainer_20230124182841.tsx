import styled, { useTheme } from 'styled-components';
import PartHeader from '../common/PartHeader';
import * as S from '../styledComponents';
export default function ArchivingContainer() {
  const theme = useTheme();
  return (
    <Container>
      <PartHeader title={'Archiving'} color={theme.textAccentColor} />
    </Container>
  );
}

const Container = styled(S.CommonSection)`
  background: ${({ theme }) => theme.colorDarkBlue};
`;

const Header = styled(S.CommonHeader)`
  color: ${({ theme }) => theme.textAccentColor};
`;

const HeaderTitle = styled(S.HeaderTitle)`
  border-color: ${({ theme }) => theme.textAccentColor};
`;
