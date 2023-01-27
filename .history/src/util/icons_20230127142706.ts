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
const iconPath = '/public/public_assets/skill_icon';
iconFolderNames.forEach((folderName) => {
  console.log(`${iconPath}/${folderName}`);
  const context = require.context(`${iconPath}/${folderName}`, false);
  console.log(context);
  context.keys().map((i) => icons[folderName].push(context(i) as string));
});
export default icons;
