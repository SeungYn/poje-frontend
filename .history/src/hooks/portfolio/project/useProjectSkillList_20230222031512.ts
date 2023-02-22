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
};
// 받을 스킬리스트를 flat 작업을 해준후 반환
export default function useProjectSkillList(skillList: ProjectSkillListType[]) {
  let result: SkillType[] = [];

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
      return { name: skill.name, path: imgPath || '' };
    });
  });

  const categotySkillList = Object.keys(skillIconNameAndImagePathArray).map(
    (key) => {
      return skillIconNameAndImagePathArray[key as IconListKeyType].map(
        (skillObj) => {
          return { ...skillObj, type: key };
        }
      );
    }
  );

  console.log(categotySkillList);

  return { currentSkillList: result.concat(...flatSkillList) };
}
