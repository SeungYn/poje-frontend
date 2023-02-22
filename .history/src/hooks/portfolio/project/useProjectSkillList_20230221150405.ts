import { ProjectSkillListType } from '@src/service/types/portfolio';
import { extractSkillIconFromFolder } from '@src/util/skillicons';
// 받을 스킬리스트를 flat 작업을 해준후 반환
export default function useProjectSkillList(skillList: ProjectSkillListType[]) {
  let result: string[] = [];
  const test = extractSkillIconFromFolder();
  console.log(test);
  let flatSkillList = skillList.map((skillObj) => {
    return skillObj.skills.map((skill) => skill.name);
  });

  return result.concat(...flatSkillList);
}
