import styled, { useTheme } from 'styled-components';
import PartHeader from '../common/PartHeader';
import * as S from '../styledComponents';
export default function ArchivingContainer() {
  const theme = useTheme();
  return (
    <Container>
      <PartHeader title={'Archiving'} color={theme.textAccentColor} />
      <ArchivingList>
        <ArchivingItem></ArchivingItem>
      </ArchivingList>
    </Container>
  );
}

const Container = styled(S.CommonSection)`
  background: ${({ theme }) => theme.colorDarkBlue};
`;

const ArchivingList = styled.ul``;

const ArchivingItem = styled.li``;
