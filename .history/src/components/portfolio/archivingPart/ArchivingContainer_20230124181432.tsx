import styled from 'styled-components';
import * as S from '../styledComponents';
export default function ArchivingContainer() {
  return <Container></Container>;
}

const Container = styled(S.CommonSection)`
  background: ${({ theme }) => theme.colorDarkBlue};
`;

const Header = styled(S.HeaderTitle)`
  color: ${({ theme }) => theme.textAccentColor};
`;
