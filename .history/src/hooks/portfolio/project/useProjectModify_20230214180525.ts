import { ProjectType } from '@src/service/types/portfolio';
import { useState } from 'react';

export default function useProjectModify(data: ProjectType) {
  const [copiedProject, setCopiedProject] = useState<ProjectType>({ ...data });
  const { prInfo, prAwardInfo, prSkillList, prImgList } = copiedProject;
  return 1;
}
