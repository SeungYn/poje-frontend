import { SkillItemType } from '@src/service/types/portfolio';

export type SkillIconSetType = {
  name: string;
  path: string;
};

export type SkillIconType = 'frontend' | 'backend' | 'test1' | 'test2';

export type IconListType = Record<SkillIconType, SkillItemType[]>;

export type IconListKeyType = keyof IconListType;

type SkillTypeAndNameType = {
  type: IconListKeyType;
  name: string;
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
    test1: [],
    test2: [],
  };

  //./backend/node.png 이런애들이 Keys()에 있음
  imgContext.keys().forEach((k) => {
    console.log('실행');
    const extractedSkill = extractSkillTypeAndName(k);
    if (extractedSkill) {
      const name = extractedSkill.name;
      const path = imgContext(k);
      icons[extractedSkill.type].push({ name, path });
    }
  });

  return icons;
}

console.log(extractSkillIconFromFolder());

function extractSkillTypeAndName(path: string): SkillTypeAndNameType | null {
  // 직업식별자에 포함된 이미지의 식별자를 가져오기
  let skillType, skillName;
  let result = path.replace('./', ''); //추출된 스킬 front/css.png;
  const splitPathList = result.split('/');

  if (splitPathList.length === 1) return null;
  skillType = splitPathList[0] as IconListKeyType;
  skillName = splitPathList[1].split('/')[0].split('.')[0];

  return { type: skillType, name: skillName };
}

function dynamicSkillTest() {
  //skill_icon 하위 폴더들의 이미지들을 가져옴
  const imgContext = require.context(
    '/public/public_assets/skill_icon',
    true,
    /.png$|.ipg$/
  );

  const icons: { [key: string]: { name: string; path: string }[] } = {};

  //./backend/node.png 이런애들이 Keys()에 있음
  imgContext.keys().forEach((k) => {
    console.log('실행');
    const extractedSkill = extractSkillTypeAndName2(k);
    if (extractedSkill) {
      const name = extractedSkill.name;
      const path = imgContext(k);
      icons[extractedSkill.type].push({ name, path });
    }
  });

  return icons;
}

function extractSkillTypeAndName2(
  path: string
): { type: string; name: string } | null {
  // 직업식별자에 포함된 이미지의 식별자를 가져오기
  let skillType, skillName;
  let result = path.replace('./', ''); //추출된 스킬 front/css.png;
  const splitPathList = result.split('/');

  if (splitPathList.length === 1) return null;
  skillType = splitPathList[0];
  skillName = splitPathList[1].split('/')[0].split('.')[0];

  return { type: skillType, name: skillName };
}

// export const iconTypes: IconListKeyType[] = Object.keys(
//   icons
// ) as IconListKeyType[];
// export default icons;

// 유물 애도를 표합니다. require.context는 매개변수로 경로를 념겨줄수 없어서
// const iconFolderNames: IconsKeyType[] = ['frontend', 'backend'];
// const ICON_PATH = '/public/public_assets/skill_icon';
// iconFolderNames.forEach((folderName) => {
//   console.log(`${ICON_PATH}/${folderName}`);
//   console.log(require);
//   const frt = 'frontend';
//   const context = require.context(
//     `/public/public_assets/skill_icon/frontend`,
//     false
//   );
//   console.log(require);
//   console.log(context.keys());
//   context.keys().map((i) => icons[folderName].push(context(i) as string));
// });
