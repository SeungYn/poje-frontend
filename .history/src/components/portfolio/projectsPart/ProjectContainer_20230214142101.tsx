import { ProjectType } from '@src/service/types/portfolio';
import useModifyMode from '@src/hooks/useModifyMode';
import Project from './Project';
type ProjectContainerType = {
  item: ProjectType;
};

export default function ProjectContainer(data: ProjectContainerType) {
  const { isModifyMode, toggleModify } = useModifyMode();
  const { item } = data;

  return <>{!isModifyMode && <Project />}</>;
}
