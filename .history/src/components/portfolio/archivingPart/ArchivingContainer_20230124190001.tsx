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
          <LinkBtn onClick={() => window.open('http://321j', '_blank')}>
            http://seungnewnttwje.com<p>ff</p>
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

const ArchivingItem = styled.li`
  background: ${({ theme }) => theme.bgColor};
  border-radius: 1rem;
  padding: 0.8rem 0.8rem;
`;

const ArchivingTitle = styled.h3``;

const LinkBtn = styled.button``;
