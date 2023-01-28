import { useMemo, useState } from 'react';
import {
  extractSkillIconFromFolder,
  IconListKeyType,
  IconListType,
} from '../util/skillicons';

export default function useIconImagesSet() {
  const iconsList = useMemo(extractSkillIconFromFolder, [
    extractSkillIconFromFolder,
  ]);

  const iconTypes = Object.keys(iconsList) as IconListKeyType[];
  const icons = useState<IconListType>({ ...iconsList });

  const deleteUsedIcon = () => {};

  return { iconTypes, icons };
}
