import {
  ProjectSkillListType,
  ProjectSkillType,
} from '@src/service/types/portfolio';

// 받을 스킬리스트를 flat 작업을 해준후 반환

export default function useProjectSkillList(skillList: ProjectSkillListType[]) {
  console.log(123);
  let result: string[] = [];
  let flatSkillList = skillList.map((skillObj) => {
    return skillObj.skills.map((skill) => skill.name);
  });

  return result.concat('1, 2, 3, 4, 5', '3', '4');
}
let a: number[] = [];
console.log(a.concat([1, 2, 3]));
