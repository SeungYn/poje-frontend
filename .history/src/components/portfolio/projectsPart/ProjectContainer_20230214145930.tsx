import { ProjectType } from '@src/service/types/portfolio';
import useModifyMode from '@src/hooks/useModifyMode';
import Project from './Project';
import ModifyBtn from '../common/ModifyBtn';
type ProjectContainerType = {
  item: ProjectType;
};

export default function ProjectContainer(data: ProjectContainerType) {
  const { isModifyMode, toggleModify } = useModifyMode();
  const { item: project } = data;

  return (
    <div>
      {!isModifyMode && <Project item={project} />}
      {isModifyMode && <Project item={project} />}
      <ModifyBtn isModifyMode={isModifyMode} handleModifyMode={toggleModify} />
    </div>
  );
}
