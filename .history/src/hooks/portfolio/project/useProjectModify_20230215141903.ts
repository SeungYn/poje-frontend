import { ProjectType } from '@src/service/types/portfolio';
import { useState } from 'react';

type CopiedProjectType = ProjectType & { fileList: File[] };

//프로젝트를 인자로 받아옴
export default function useProjectModify(data: ProjectType) {
  const [copiedProject, setCopiedProject] = useState<ProjectType>({ ...data });
  const { prInfo, prAwardInfo, prSkillList, prImgList } = copiedProject;

  return 1;
}
