import useProjectSkillList from '@src/hooks/portfolio/project/useProjectSkillList';
import {
  ProjectSkillListType,
  ProjectSkillType,
} from '@src/service/types/portfolio';
import styled from 'styled-components';
type PropType = {
  skillList: ProjectSkillListType[];
};
export default function ProjectSkillList({ skillList }: PropType) {
  const flatSkillList = useProjectSkillList([
    {
      type: 'backend',
      skills: [
        {
          skillId: 29,
          name: 'java',
        },
        {
          skillId: 30,
          name: 'springboot',
        },
      ],
    },
    {
      type: 'frontend',
      skills: [
        {
          skillId: 27,
          name: 'javascript',
        },
        {
          skillId: 28,
          name: 'react',
        },
      ],
    },
  ]);
  console.log(flatSkillList);
  return <SkillListContainer></SkillListContainer>;
}

const SkillListContainer = styled.div``;

const SkillList = styled.ul``;

const SkillItem = styled.li``;
