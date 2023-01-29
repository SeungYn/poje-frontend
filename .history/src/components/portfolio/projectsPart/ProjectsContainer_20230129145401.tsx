import styled, { useTheme } from 'styled-components';
import 'swiper/css/pagination';
import PartHeader from '../common/PartHeader';
import * as S from '../styledComponents';
import Project from './Project';

export default function ProjectsContainer() {
  const theme = useTheme();
  return (
    <Container>
      <PartHeader title={'Projects'} color={theme.textColor} />
      <Content>
        <Project />
      </Content>
    </Container>
  );
}
const Container = styled(S.CommonSection)`
  background: ${({ theme }) => theme.mainColorLight};
`;

const Content = styled.div`
  max-width: 1600px;
`;
