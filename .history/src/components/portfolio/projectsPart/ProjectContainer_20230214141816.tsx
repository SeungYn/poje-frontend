import { ProjectType } from '@src/service/types/portfolio';
import useModifyMode from '@src/hooks/useModifyMode';
type ProjectContainerType = {
  item: ProjectType;
};

export default function ProjectContainer(data: ProjectContainerType) {
  const { isModifyMode, toggleModify } = useModifyMode();
  const { item } = data;

  return <div></div>;
}
