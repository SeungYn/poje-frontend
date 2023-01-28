import { memo, useMemo } from 'react';
import { extractSkillIconFromFolder, IconListKeyType } from '../util/icons';
export default memo(function useIconImagesSet() {
  const iconsList = useMemo(extractSkillIconFromFolder, [
    extractSkillIconFromFolder,
  ]);
  const iconTypes = Object.keys(iconsList) as IconListKeyType[];

  return { iconTypes, icons: iconsList };
});
