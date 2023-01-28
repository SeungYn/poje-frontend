import { extractSkillIconFromFolder, IconListKeyType } from '../util/icons';
export default function useIconImagesSet() {
  const iconsList = extractSkillIconFromFolder();
  const iconTypes = Object.keys(iconsList) as IconListKeyType[];

  return { iconTypes, icons: iconsList };
}
