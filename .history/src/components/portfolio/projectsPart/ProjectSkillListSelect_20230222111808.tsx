import useProjectSkillList from '@src/hooks/portfolio/project/useProjectSkillList';
import { ProjectSkillListType } from '@src/service/types/portfolio';

type PropType = { skillList: ProjectSkillListType[] };
export default function ProjectSkillListSelect({ skillList }: PropType) {
  const { categorySkillList, skillIconKeys } = useProjectSkillList(skillList);
  console.log(categorySkillList);
  return <select>{}</select>;
}
