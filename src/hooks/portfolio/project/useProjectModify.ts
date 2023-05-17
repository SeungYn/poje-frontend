import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import useConfirmModal from '@src/hooks/common/useConfirmModal';
import service from '@src/service';
import {
  DeleteProjectRequest,
  ProjectType,
} from '@src/service/types/portfolio';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect, useRef, useState } from 'react';

export type CopiedProjectType = ProjectType & {
  fileList: File[];
  prImgDelList: string[];
};

export type HandleDeleteProjectSkill = {
  skillName: string;
  skillType: string;
};

//프로젝트를 인자로 받아옴
// 포트폴리오 파트는
export default function useProjectModify(data: ProjectType) {
  const queryClient = useQueryClient();
  const { portfolioId } = usePortfolioInfo();
  const { setConfirmModal } = useConfirmModal();
  //복사된 프로젝트에서 이미지리스트는 초기화
  const [copiedProject, setCopiedProject] = useState<CopiedProjectType>({
    ...data,
    fileList: [],
    prImgDelList: [],
  });

  const discriptionRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target instanceof HTMLSelectElement) {
      const { value, selectedOptions } = e.target;
      const skillType = selectedOptions[0].dataset.type!;
      return setCopiedProject((pr) => {
        const targetSkillObj = pr.prSkillList.find(
          (obj) => obj.type === skillType
        );

        if (!targetSkillObj) {
          return {
            ...pr,
            prSkillList: [
              ...pr.prSkillList,
              { type: skillType, skills: [{ name: value }] },
            ],
          };
        }

        //해당 리스트에 해당 타입의 스킬이 존재하는 경우 그냥 추가하지 않음
        if (targetSkillObj.skills.find((obj) => obj.name === value))
          return { ...pr };

        //기존 해당 타입 스킬리스트에 스킬 하나를 추가를 한 후 나머지 스킬리스트를 검색 후 이후에 추가
        targetSkillObj.skills.push({ name: value });
        const restSkillList = pr.prSkillList.filter((skillObj) => {
          return skillObj.type !== skillType;
        });

        return {
          ...pr,
          prSkillList: [...restSkillList, { ...targetSkillObj }],
        };
      });
    } else {
      const { value, name, files } = e.target;

      switch (name) {
        case 'file':
          const fileImgs = [...files!].map((file) => URL.createObjectURL(file));

          return setCopiedProject((pj) => ({
            ...pj,
            fileList: [...files!],
            prImgList: [...pj.prImgList, ...fileImgs],
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
      const { prSkillList, prAwardInfo, prInfo, fileList, prImgDelList } =
        copiedProject;

      return await service.portfolio.putProject({
        projectId: prInfo.projectId,
        prImgList: fileList,
        prInfo,
        prAwardInfo,
        prSkillList,
        prImgDelList,
      });
    },
    {
      onMutate: () => {
        setLoading(true);
      },
      onSuccess: () => {
        alert('수정완료');
        queryClient.invalidateQueries(['portfolioProject', portfolioId]);
      },
      onSettled: () => {
        setLoading(false);
      },
    }
  );

  const deleteProject = useMutation<
    void,
    unknown,
    DeleteProjectRequest,
    unknown
  >(
    async (data) => {
      return await service.portfolio.deleteProject({
        projectId: data.projectId,
      });
    },

    {
      onMutate: () => {
        setLoading(true);
      },
      onSuccess: () => {
        alert('삭제 성공');
        queryClient.invalidateQueries(['portfolioProject', portfolioId]);
      },
      onSettled: () => setLoading(false),
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    putProject.mutate(copiedProject);
  };

  const handleDelete = () => {
    setConfirmModal('정말로 삭제하시겠습니까?', () => {
      deleteProject.mutate({ projectId: copiedProject.prInfo.projectId });
    });
  };

  // 기존에 서버에 저장한 이미지가 있으면서 해당 이미지가 수정 모드에서 삭제되면
  // 해당 이미지의 url 을 가져와서 삭제 리스트에 넣고 보내줌
  const handlePrevImgRemove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const { dataset } = target;
    const reg = /^https/;

    if (reg.test(dataset.src!)) {
      setCopiedProject((item) => {
        return { ...item, prImgDelList: [...item.prImgDelList, dataset.src!] };
      });
    }
    setCopiedProject((item) => {
      const prImgList = item.prImgList.filter((s) => s !== target.dataset.src);
      return { ...item, prImgList };
    });
  };

  const handleDeleteProjectSkill = ({
    skillName,
    skillType,
  }: HandleDeleteProjectSkill) => {
    setCopiedProject((pr) => {
      const targetSkillObj = pr.prSkillList.find(
        (skillObj) => skillObj.type === skillType
      );

      const skillListDeleted = targetSkillObj?.skills.filter(
        (item) => item.name !== skillName
      )!;

      const restSkillList = pr.prSkillList.filter(
        (skillObj) => skillObj.type !== skillType
      );

      return {
        ...pr,
        prSkillList: [
          ...restSkillList,
          { type: skillType, skills: skillListDeleted },
        ],
      };
    });
  };

  //textarea 사이즈 초기화
  useEffect(() => {
    resizeAutoTextArea();
  }, [discriptionRef]);

  // unmount될 때 URL.createObjectURL로 만든 이미지 url 제거
  useEffect(() => {
    return () => {
      console.log('이미지 제거');
      copiedProject.prImgList.map((src) => URL.revokeObjectURL(src));
    };
  }, []);

  return {
    copiedProject,
    onChange,
    onChangeTextArea,
    discriptionRef,
    loading,
    handleSubmit,
    handleDelete,
    handlePrevImgRemove,
    handleDeleteProjectSkill,
  };
}
