import { useMemo } from 'react';
import {
  extractSkillIconFromFolder,
  IconListKeyType,
} from '../util/skillicons';

export default function useIconImagesSet() {
  const iconsList = useMemo(extractSkillIconFromFolder, [
    extractSkillIconFromFolder,
  ]);
  const iconTypes = Object.keys(iconsList) as IconListKeyType[];

  return { iconTypes, icons: iconsList };
}
