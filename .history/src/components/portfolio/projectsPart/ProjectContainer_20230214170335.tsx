import { ProjectType } from '@src/service/types/portfolio';
import useModifyMode from '@src/hooks/useModifyMode';
import Project from './Project';
import ModifyBtn from '../common/ModifyBtn';
import styled from 'styled-components';
import ProjectModifyMode from './ProjectModifyMode';
type ProjectContainerType = {
  item: ProjectType;
};

export default function ProjectContainer(data: ProjectContainerType) {
  const { isModifyMode, toggleModify } = useModifyMode();
  const { item: project } = data;

  return (
    <Container>
      {!isModifyMode && <Project item={project} />}
      {isModifyMode && <ProjectModifyMode item={project} />}
      <ModifyBtn isModifyMode={isModifyMode} handleModifyMode={toggleModify} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;
