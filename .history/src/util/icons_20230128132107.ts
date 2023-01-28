class IconSet {
  name: string;
  path: string;
  constructor(name: string, path: string) {
    this.name = name;
    this.path = path;
  }
}

type IconSetType = {
  name: string;
  path: string;
};

type IconListType = {
  frontend: IconSetType[];
  backend: IconSetType[];
};

export type IconListKeyType = keyof IconListType;

const icons: IconListType = {
  frontend: [],
  backend: [],
};

const imgContext = require.context(
  '/public/public_assets/skill_icon',
  true,
  /.png$|.ipg$/
);
console.log('안녕');
imgContext.keys().forEach((k) => {
  console.log('실행');
  const extractedSkill = extractSkillTypeAndName(k);
  if (extractedSkill) {
    const name = extractedSkill.name;
    const path = imgContext(k);
    icons[extractedSkill.type].push({ name, path });
  }
});

type SkillTypeAndNameType = {
  type: IconListKeyType;
  name: string;
};

function extractSkillTypeAndName(path: string): SkillTypeAndNameType | null {
  // 직업식별자에 포함된 이미지의 식별자를 가져오기
  let skillType, skillName;
  let result = path.replace('./', '');
  const splitPathList = result.split('/');

  if (splitPathList.length === 1) return null;
  skillType = splitPathList[0] as IconListKeyType;
  skillName = splitPathList[1].split('/')[0];

  return { type: skillType, name: skillName };
}
export const iconTypes: IconListKeyType[] = Object.keys(
  icons
) as IconListKeyType[];
export default icons;

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

class test {
  a() {
    console.log(123);
  }
}
