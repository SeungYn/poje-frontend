import { useMemo, useState } from 'react';
import {
  extractSkillIconFromFolder,
  IconListKeyType,
  IconListType,
  SkillIconSetType,
  SkillIconType,
} from '../util/skillicons';

export default function useIconImagesSet() {
  const iconsList = useMemo(extractSkillIconFromFolder, [
    extractSkillIconFromFolder,
  ]);

  const iconTypes = Object.keys(iconsList) as IconListKeyType[];
  const [icons, setIcons] = useState<IconListType>({ ...iconsList });

  const deleteUsedIcon = ({
    item,
    seletedType,
  }: {
    item: SkillIconSetType;
    seletedType: SkillIconType;
  }) => {
    setIcons((list) => {
      let targetSet = [...list[seletedType]];
      targetSet = targetSet.filter((i) => i.name !== item.name);
      return { ...list, [seletedType]: [...targetSet] };
    });
  };

  return { iconTypes, icons };
}
