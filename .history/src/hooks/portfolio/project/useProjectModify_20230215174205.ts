import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import service from '@src/service';
import { ProjectType } from '@src/service/types/portfolio';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback, useRef, useState } from 'react';
import useProject from './useProject';

export type CopiedProjectType = ProjectType & { fileList: File[] };

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
  const queryClient = useQueryClient();
  const { portfolioId } = usePortfolioInfo();
  //복사된 프로젝트에서 이미지리스트는 초기화
  const [copiedProject, setCopiedProject] = useState<CopiedProjectType>({
    ...data,
    fileList: [],
    prImgList: [],
  });
  const discriptionRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, files } = e.target;

    switch (name) {
      case 'file':
        const fileImgs = [...files!].map((file) => URL.createObjectURL(file));
        console.log(fileImgs);
        return setCopiedProject((pj) => ({
          ...pj,
          fileList: [...files!],
          prImgList: [...fileImgs],
        }));
      case 'name':
        return setCopiedProject((pj) => ({
          ...pj,
          prInfo: { ...pj.prInfo, name: value },
        }));
      case 'belong':
        return setCopiedProject((pj) => ({
          ...pj,
          prInfo: { ...pj.prInfo, belong: value },
        }));
      case 'link':
        return setCopiedProject((pj) => ({
          ...pj,
          prInfo: { ...pj.prInfo, link: value },
        }));
      case 'project-description':
        return setCopiedProject((pj) => ({
          ...pj,
          prInfo: { ...pj.prInfo, description: value },
        }));
      case 'duration':
        return setCopiedProject((pj) => ({
          ...pj,
          prInfo: { ...pj.prInfo, duration: value },
        }));
      case 'supervision':
        return setCopiedProject((pj) => ({
          ...pj,
          prAwardInfo: { ...pj.prAwardInfo, supervision: value },
        }));
      case 'grade':
        return setCopiedProject((pj) => ({
          ...pj,
          prAwardInfo: { ...pj.prAwardInfo, grade: value },
        }));
      case 'award-description':
        return setCopiedProject((pj) => ({
          ...pj,
          prAwardInfo: { ...pj.prAwardInfo, description: value },
        }));
    }
  };

  const onChangeTextArea = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      resizeAutoTextArea();
      setCopiedProject((pj) => ({
        ...pj,
        prInfo: { ...pj.prInfo, description: e.target.value },
      }));
    },
    []
  );

  const resizeAutoTextArea = () => {
    if (discriptionRef.current) {
      discriptionRef.current.style.height = 'auto';
      discriptionRef.current.style.height = `${discriptionRef.current.scrollHeight}px`;
    }
  };

  const putProject = useMutation<void, unknown, CopiedProjectType, unknown>(
    async (copiedProject) => {
      const { prSkillList, prAwardInfo, prInfo, fileList } = copiedProject;
      return await service.portfolio.putProject({
        projectId: prInfo.projectId,
        prImgList: fileList,
        prInfo,
        prAwardInfo,
        prSkillList,
      });
    },
    {
      onMutate: () => {
        setLoading(true);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(['portfolioProject', portfolioId]);
        setLoading(false);
      },
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    putProject.mutate(copiedProject);
  };

  return { copiedProject, onChange, onChangeTextArea, discriptionRef, loading };
}
