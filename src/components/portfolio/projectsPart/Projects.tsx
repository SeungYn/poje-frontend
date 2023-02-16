import useProject from '@src/hooks/portfolio/project/useProject';
import { v4 as uuid4 } from 'uuid';
import ProjectContainer from './ProjectContainer';

export default function Projects() {
  const { projects } = useProject();
  console.log(projects);
  return (
    <>
      {projects!.map((item) => (
        <ProjectContainer key={uuid4()} item={item} />
      ))}
    </>
  );
}
