import { useMemo, useState } from 'react';
import { SkillListType } from '../components/portfolio/skillPart/PortfolioSkillsContainer';
import {
  extractSkillIconFromFolder,
  IconListKeyType,
  IconListType,
  SkillIconSetType,
  SkillIconType,
} from '../util/skillicons';

export default function useIconImagesSet(modifySkillList?: SkillListType[]) {
  const iconsList = useMemo(extractSkillIconFromFolder, [
    extractSkillIconFromFolder,
    modifySkillList,
  ]);

  const iconTypes = Object.keys(iconsList) as IconListKeyType[];
  const [icons, setIcons] = useState<IconListType>({ ...iconsList });

  const deleteUsedIcon = ({
    item,
    selectedType,
  }: {
    item: SkillIconSetType;
    selectedType: SkillIconType;
  }) => {
    setIcons((list) => {
      let targetSet = [...list[selectedType]];
      targetSet = targetSet.filter((i) => i.name !== item.name);
      return { ...list, [selectedType]: [...targetSet] };
    });
  };

  return { iconTypes, icons, deleteUsedIcon };
}
