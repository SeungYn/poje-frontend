import { SkillsType } from '@src/service/types/portfolio';
import { useEffect, useMemo, useState } from 'react';
import {
  extractSkillIconFromFolder,
  IconListKeyType,
  IconListType,
  SkillIconSetType,
  SkillIconType,
} from '../util/skillicons';

export default function useIconImagesSet(modifySkillList: SkillsType[]) {
  const iconsList = useMemo(extractSkillIconFromFolder, [
    extractSkillIconFromFolder,
  ]);

  //frontend, backend... 각 기술 타입
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

  // 스킬 리스트가 수정이 되면 스킬 아이콘들을 다시 가져옴
  // 서로 연동되어서 추가 제거가 힘들기떄문에 한쪽(스킬리스트)가 수정되면 아이콘들을 다시 가져오는 것으로 결정
  useEffect(() => {
    setIcons({ ...iconsList });
  }, [modifySkillList, iconsList]);

  return { iconTypes, icons, deleteUsedIcon };
}
