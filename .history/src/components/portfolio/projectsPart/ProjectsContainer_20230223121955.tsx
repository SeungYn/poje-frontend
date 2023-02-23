import CommonError from '@src/components/errorComponent/CommonError';
import useCreateProject from '@src/hooks/portfolio/project/useCreateProject';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styled, { useTheme } from 'styled-components';
import 'swiper/css/pagination';
import ModifyHorizonBtn from '../common/ModifyHorizonBtn';
import PartHeader from '../common/PartHeader';
import * as S from '../styledComponents';
import Projects from './Projects';
import ProjectSkeleton from './ProjectSkeleton';

export default function ProjectsContainer() {
  const theme = useTheme();
  const createProject = useCreateProject();
  return (
    <Container id='projects'>
      <PartHeader title={'Projects'} color={theme.textColor} />
      <Content>
        <ProjectSkeleton />
        <ErrorBoundary FallbackComponent={CommonError}>
          <Suspense fallback={<ProjectSkeleton />}>
            <Projects />
          </Suspense>
        </ErrorBoundary>
      </Content>
      <ModifyHorizonBtn
        title={'추가'}
        handleClick={() => {
          createProject();
        }}
      />
    </Container>
  );
}
const Container = styled(S.CommonSection)`
  background: ${({ theme }) => theme.mainColorLight};
`;

const Content = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;
