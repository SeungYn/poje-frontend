import useCreateProject from '@src/hooks/portfolio/project/useCreateProject';
import useProject from '@src/hooks/portfolio/project/useProject';
import { v4 as uuid4 } from 'uuid';
import ModifyHorizonBtn from '../common/ModifyHorizonBtn';
import ProjectContainer from './ProjectContainer';

export default function Projects() {
  const { projects } = useProject();
  console.log(projects);
  const createProject = useCreateProject();
  return (
    <>
      {projects!.map((item) => (
        <ProjectContainer key={uuid4()} item={item} />
      ))}
      <ModifyHorizonBtn
        title={'추가'}
        handleClick={() => {
          createProject();
        }}
      />
    </>
  );
}
