import { ProjectType } from '@src/service/types/portfolio';
import { useState } from 'react';

type CopiedProjectType = ProjectType & { fileList: File[] };

type Action =
  | { type: 'copy'; payload: CopiedProjectType }
  | { type: 'file'; payload: File[] }
  | { type: 'name'; payload: string }
  | { type: 'belong'; payload: string }
  | { type: 'project-description'; payload: string }
  | { type: 'duration'; payload: string }
  | { type: 'link'; payload: string }
  | { type: 'supervision'; payload: string }
  | { type: 'grade'; payload: string }
  | { type: 'award-description'; payload: string };

//프로젝트를 인자로 받아옴
// 포트폴리오 파트는
export default function useProjectModify(data: ProjectType) {
  const [copiedProject, setCopiedProject] = useState<CopiedProjectType>({
    ...data,
    fileList: [],
  });
  const { prInfo, prAwardInfo, prSkillList, prImgList } = copiedProject;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, file } = e.target;
  };

  return 1;
}
