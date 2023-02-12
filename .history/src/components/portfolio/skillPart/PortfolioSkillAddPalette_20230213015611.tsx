import { SkillsType } from '@src/service/types/portfolio';
import { Fragment, useState } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import useIconImagesSet from '../../../hooks/useIconImagesSet';
import {
  IconListKeyType,
  SkillIconSetType,
  SkillIconType,
} from '../../../util/skillicons';
import { SkillListType } from './PortfolioSkillsContainer';

interface PortfolioSkillAddPaletteType {
  onModifyMode: () => void;
  handleAddSkill: ({
    item,
    selectedType,
  }: {
    item: SkillIconSetType;
    selectedType: SkillIconType;
  }) => void;
  modifySkillList: SkillsType[];
}

export default function PortfolioSkillAddPalette({
  onModifyMode,
  handleAddSkill,
  modifySkillList,
}: PortfolioSkillAddPaletteType) {
  const { iconTypes, icons, deleteUsedIcon } =
    useIconImagesSet(modifySkillList);
  const [selectedIconType, setSelectedIconType] =
    useState<IconListKeyType>('frontend');
  const onAddSkill = ({
    item,
    selectedType,
  }: {
    item: SkillIconSetType;
    selectedType: SkillIconType;
  }) => {
    deleteUsedIcon({ item, selectedType });
    handleAddSkill({
      item,
      selectedType,
    });
  };
  return (
    <Container>
      <Header>
        <Title>스킬 선택하기</Title>
        <CloseButton onClick={onModifyMode}>&times; </CloseButton>
      </Header>
      <CategoryList>
        {iconTypes.map((job) => (
          <CategoryItem
            key={uuid()}
            active={selectedIconType === job ? true : false}
            onClick={() => setSelectedIconType(job)}
          >
            {job}
          </CategoryItem>
        ))}
      </CategoryList>
      <IconList>
        {icons[selectedIconType].map((item) => {
          if (isExistOriginSkillList(modifySkillList, item, selectedIconType))
            return <Fragment key={uuid()}></Fragment>;
          return (
            <IconItem
              key={uuid()}
              src={item.path}
              onClick={() => {
                onAddSkill({ selectedType: selectedIconType, item });
              }}
            />
          );
        })}
      </IconList>
    </Container>
  );
}

function isExistOriginSkillList(
  originSkillList: SkillListType[],
  targetItem: SkillIconSetType,
  selectedIconType: SkillIconType
) {
  const skillList = originSkillList.find(
    (skills) => skills.type === selectedIconType
  );
  if (skillList) {
    const target = skillList.skills.find(
      (skill) => skill.name === targetItem.name
    );
    if (target) return true;
  }
  return false;
}

const Container = styled.section`
  position: relative;
  margin-top: 1rem;
  background: white;
  width: 100%;
  padding: 0.6rem 1rem;
  border-radius: 1rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1``;

const CloseButton = styled.button`
  font-size: 2rem;
  position: absolute;
  right: 15px;
  top: 0;
`;

const CategoryList = styled.ul`
  display: flex;
  margin-bottom: 0.4rem;
`;

const CategoryItem = styled.li<{ active: boolean }>`
  padding: 0.2rem 0.2rem;
  border-bottom: ${({ active }) => (active ? `1px solid black` : 'none')};
`;

const IconList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const IconItem = styled.img`
  width: 40px;
  object-fit: cover;

  &:not(:first-child) {
    margin-left: 0.4rem;
  }
`;
