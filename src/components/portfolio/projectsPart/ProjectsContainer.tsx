import CommonError from '@src/components/errorComponent/CommonError';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styled, { useTheme } from 'styled-components';
import 'swiper/css/pagination';
import PartHeader from '../common/PartHeader';
import * as S from '../styledComponents';
import Projects from './Projects';
import ProjectSkeleton from './ProjectSkeleton';

export default function ProjectsContainer() {
  const theme = useTheme();
  return (
    <Container id='projects'>
      <PartHeader title={'Projects'} color={theme.textColor} />
      <Content>
        <ErrorBoundary FallbackComponent={CommonError}>
          <Suspense fallback={<ProjectSkeleton />}>
            <Projects />
          </Suspense>
        </ErrorBoundary>
      </Content>
    </Container>
  );
}
const Container = styled(S.CommonSection)`
  background: ${({ theme }) => theme.mainColorLight};
`;

const Content = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
`;
