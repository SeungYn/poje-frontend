import {
  ProjectSkillListType,
  ProjectSkillType,
} from '@src/service/types/portfolio';

// 받을 스킬리스트를 flat 작업을 해준후 반환

export default function useProjectSkillList(skillList: ProjectSkillListType[]) {
  const flatSkillList = skillList.map((skillObj) => {
    return skillObj.skills.map((skill) => skill.name);
  });

  console.log(flatSkillList);
  return 1;
}
