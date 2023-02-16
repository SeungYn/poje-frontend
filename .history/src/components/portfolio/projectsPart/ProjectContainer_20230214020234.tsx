import { ProjectType } from '@src/service/types/portfolio';

type ProjectContainerType = {
  item: ProjectType;
};

export default function ProjectContainer(data: ProjectContainerType) {
  const { item } = data;
  return <div></div>;
}
