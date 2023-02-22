import { ProjectSkillListType } from '@src/service/types/portfolio';
import {
  extractSkillIconFromFolder,
  IconListKeyType,
  IconListType,
} from '@src/util/skillicons';
import { useMemo } from 'react';

type SkillType = {
  path: string;
  name: string;
  type: string;
};
// 받을 스킬리스트를 flat 작업을 해준후 반환
export default function useProjectSkillList(skillList: ProjectSkillListType[]) {
  let result: SkillType[] = [];
  console.log(skillList);
  const skillIconNameAndImagePathArray = useMemo(extractSkillIconFromFolder, [
    extractSkillIconFromFolder,
  ]);

  //스킬 리스트를 순회하면서 해당 스킬이름의 이미지 경로와 이름을 반환
  const flatSkillList = skillList.map((skillObj) => {
    const skillType = skillObj.type as IconListKeyType;
    return skillObj.skills.map((skill) => {
      const imgPath = skillIconNameAndImagePathArray[skillType].find(
        (val) => val.name === skill.name
      )?.path;
      return {
        name: skill.name,
        path: imgPath || '',
        type: skillType as string,
      };
    });
  });

  // {name: 'css', path: '/static/media/css.e31e30fbd381c3f058df.png', type: 'test1'} 기존 스킬 obj에 type 추가
  // const categorySkillList = Object.keys(skillIconNameAndImagePathArray).map(
  //   (key) => {
  //     return skillIconNameAndImagePathArray[key as IconListKeyType].map(
  //       (skillObj) => {
  //         return { ...skillObj, type: key };
  //       }
  //     );
  //   }
  // );

  const skillIconKeys = useMemo(() => {
    console.log('스킬 아이콘 키들이 다시 만들어짐');
    return Object.keys(skillIconNameAndImagePathArray) as IconListKeyType[];
  }, [skillIconNameAndImagePathArray]);

  return {
    currentSkillList: result.concat(...flatSkillList),
    categorySkillList: skillIconNameAndImagePathArray,
    skillIconKeys,
  };
}
