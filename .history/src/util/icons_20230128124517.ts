type IconListType = {
  frontend: string[];
  backend: string[];
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

imgContext.keys().forEach((k) => {
  const jobType = extractPathJobType(k);
  if (jobType) {
    icons[jobType].push(imgContext(k));
  }
});

function extractPathJobType(path: string): IconListKeyType | null {
  // 직업식별자에 포함된 이미지의 식별자를 가져오기
  let result = path.replace('./', '');
  const splitPathList = result.split('/');
  console.log(splitPathList);
  if (splitPathList.length === 1) return null;
  return splitPathList[0] as IconListKeyType;
}
export const iconKeys: IconListKeyType[] = Object.keys(
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
