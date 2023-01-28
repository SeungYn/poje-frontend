type Icons = {
  frontend: string[];
  backend: string[];
};

const icons: Icons = {
  frontend: [],
  backend: [],
};

const iconFolderNames = ['frontend', 'backend'];
const iconPath = '/public/public_assets/skill_icon';
iconFolderNames.forEach((folderName) => {
  const context = require.context(`${iconPath}/${folderName}`, false);
  //context.keys().map((i) => icons[].push(test(i)))
});
export {};
