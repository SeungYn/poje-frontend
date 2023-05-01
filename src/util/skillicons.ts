import { SkillItemType } from '@src/service/types/portfolio';

export type SkillIconSetType = {
  name: string;
  path: string;
};

export type SkillIconType = 'frontend' | 'backend';

export type IconListType = Record<SkillIconType, SkillItemType[]>;

export type IconListKeyType = keyof IconListType;

type SkillTypeAndNameType = {
  type: IconListKeyType;
  name: string;
  path: string;
};

export function extractSkillIconFromFolder() {
  //skill_icon 하위 폴더들의 이미지들을 가져옴
  const imgContext = require.context(
    '/public/public_assets/skill_icon',
    true,
    /.png$|.ipg$/
  );

  const icons: IconListType = {
    frontend: [],
    backend: [],
  };

  //./backend/node.png 이런애들이 Keys()에 있음
  imgContext.keys().forEach((k) => {
    const extractedSkill = extractSkillTypeAndName(k);

    if (extractedSkill) {
      const name = extractedSkill.name;
      const path = extractedSkill.path;
      icons[extractedSkill.type].push({ name, path });
    }
  });

  return icons;
}

// 동적으로 키에 배열을 작성하고 난 후 그 키를 동적으로 가져오는 것은 불가능
function extractSkillTypeAndName(path: string): SkillTypeAndNameType | null {
  // 직업식별자에 포함된 이미지의 식별자를 가져오기
  let skillType, skillName, skillPath;
  let result = path.replace('./', ''); //추출된 스킬 front/css.png;
  const splitPathList = result.split('/');

  if (splitPathList.length === 1) return null;
  skillType = splitPathList[0] as IconListKeyType;
  skillName = splitPathList[1].split('/')[0].split('.')[0];
  skillPath = splitPathList[1].split('/')[0];
  return { type: skillType, name: skillName, path: skillPath };
}
