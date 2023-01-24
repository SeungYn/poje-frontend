import styled from 'styled-components';
import * as S from '../styledComponents';
export default function ArchivingContainer() {
  return (
    <Container>
      <Header>
        <S.HeaderTitle>Archiving</S.HeaderTitle>
      </Header>
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
  border-color: ${({ theme }) => theme.accentColor};
`;
