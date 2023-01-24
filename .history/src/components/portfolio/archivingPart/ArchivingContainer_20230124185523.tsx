import styled, { useTheme } from 'styled-components';
import PartHeader from '../common/PartHeader';
import * as S from '../styledComponents';
export default function ArchivingContainer() {
  const theme = useTheme();
  return (
    <Container>
      <PartHeader title={'Archiving'} color={theme.textAccentColor} />
      <ArchivingList>
        <ArchivingItem>
          <ArchivingTitle>GitHub</ArchivingTitle>
          <LinkBtn onClick={() => window.open('fff', '_blank')}>
            http://seungnewnttwje.com
          </LinkBtn>
        </ArchivingItem>
      </ArchivingList>
    </Container>
  );
}

const Container = styled(S.CommonSection)`
  background: ${({ theme }) => theme.colorDarkBlue};
`;

const ArchivingList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const ArchivingItem = styled.li``;

const ArchivingTitle = styled.h3``;

const LinkBtn = styled.button``;
