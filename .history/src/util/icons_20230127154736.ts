type IconsType = {
  frontend: string[];
  backend: string[];
};

type IconsKeyType = keyof IconsType;

const icons: IconsType = {
  frontend: [],
  backend: [],
};

const iconFolderNames: IconsKeyType[] = ['frontend', 'backend'];
const ICON_PATH = '/public/public_assets/skill_icon';
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

const test = require.context('/public/public_assets/skill_icon', true);
console.log(
  test.keys().forEach((k) => console.log(k.replace('./', '').split('/')))
);

function pathProcess(path: string) {
  // 직업식별자에 포함된 이미지만 거르기

  //현재 폴더 경로 제거
  let result = path.replace('./', '');
  const splitPathList = result.split('/');
  if (splitPathList.length > 1) return '';
  return splitPathList[1];
}
export default icons;
