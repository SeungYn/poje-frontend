import useProjectSkillList from '@src/hooks/portfolio/project/useProjectSkillList';
import { ProjectSkillListType } from '@src/service/types/portfolio';

type PropType = {};
export default function ProjectSkillListSelect(
  skillList: ProjectSkillListType[]
) {
  const { categorySkillList } = useProjectSkillList(skillList);
  console.log(categorySkillList);
  return <div></div>;
}
