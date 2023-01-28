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

const test = require.context(
  '/public/public_assets/skill_icon',
  true,
  /.png$|.ipg$/
);
test.keys().forEach((k) => {
  const result = pathProcess(k);
  console.log(result);
});

function pathProcess(path: string) {
  // 직업식별자에 포함된 이미지만 거르기
  let result = path.replace('./', '');
  const splitPathList = result.split('/');
  if (splitPathList.length === 1) return null;
  return splitPathList;
}
export default icons;
