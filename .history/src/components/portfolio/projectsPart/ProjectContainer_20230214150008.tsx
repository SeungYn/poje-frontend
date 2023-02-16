import { ProjectType } from '@src/service/types/portfolio';
import useModifyMode from '@src/hooks/useModifyMode';
import Project from './Project';
import ModifyBtn from '../common/ModifyBtn';
import { styled } from '@tanstack/react-query-devtools/build/lib/utils';
type ProjectContainerType = {
  item: ProjectType;
};

export default function ProjectContainer(data: ProjectContainerType) {
  const { isModifyMode, toggleModify } = useModifyMode();
  const { item: project } = data;

  return (
    <Container>
      {!isModifyMode && <Project item={project} />}
      {isModifyMode && <Project item={project} />}
      <ModifyBtn isModifyMode={isModifyMode} handleModifyMode={toggleModify} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;
