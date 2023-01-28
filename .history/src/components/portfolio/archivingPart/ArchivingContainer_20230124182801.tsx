import styled from 'styled-components';
import PartHeader from '../common/partHeader';
import * as S from '../styledComponents';
export default function ArchivingContainer() {
  return (
    <Container>
      <PartHeader title={'Archiving'} />
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
