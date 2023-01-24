import styled, { useTheme } from 'styled-components';
import PartHeader from '../common/PartHeader';
import * as S from '../styledComponents';
export default function ArchivingContainer() {
  const theme = useTheme();
  const a = '<p>ff</p>';
  return (
    <Container>
      <PartHeader title={'Archiving'} color={theme.textAccentColor} />
      <ArchivingList>
        <ArchivingItem>
          <ArchivingTitle>GitHub</ArchivingTitle>
          <LinkBtn onClick={() => window.open('http://321j', '_blank')}>
            www.nexon.com
          </LinkBtn>
          <Description>깃허브 소스코드입니다.</Description>
          <ExplanationList>
            <Explanation>과거 프로젝트 소스코드</Explanation>
            <Explanation>과거 프로젝트 소스코드</Explanation>
            <Explanation>과거 프로젝트 소스코드</Explanation>
          </ExplanationList>
        </ArchivingItem>

        <ArchivingItem>
          <ArchivingTitle>GitHub</ArchivingTitle>
          <LinkBtn onClick={() => window.open('http://321j', '_blank')}>
            www.nexon.com
          </LinkBtn>
          <Description>깃허브 소스코드입니다.</Description>
          <ExplanationList>
            <Explanation>과거 프로젝트 소스코드</Explanation>
            <Explanation>과거 프로젝트 소스코드</Explanation>
            <Explanation>과거 프로젝트 소스코드</Explanation>
          </ExplanationList>
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
  padding: 2rem;
  font-size: ${({ theme }) => theme.fontMiddleSize};
  width: 100%;
`;

const ArchivingTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontLargeSize};
`;

const LinkBtn = styled.button`
  padding: 1rem 0;
  font-size: ${({ theme }) => theme.fontMiddleSize};
`;

const Description = styled.p``;

const ExplanationList = styled.ul``;
const Explanation = styled.li``;
