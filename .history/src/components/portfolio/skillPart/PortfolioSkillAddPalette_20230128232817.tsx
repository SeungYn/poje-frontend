import { useState } from 'react';
import styled from 'styled-components';
import useIconImagesSet from '../../../hooks/useIconImagesSet';
import { IconListKeyType } from '../../../util/skillicons';

interface PortfolioSkillAddPaletteType {
  onModifyMode: () => void;
  onAddSkill: ({
    item,
    seletedType,
  }: {
    item: SkillIconSetType;
    seletedType: SkillIconType;
  }) => void;
}

export default function PortfolioSkillAddPalette({
  onModifyMode,
}: PortfolioSkillAddPaletteType) {
  const { iconTypes, icons } = useIconImagesSet();
  const [selectedIconType, setSelectedIconType] =
    useState<IconListKeyType>('frontend');

  console.log(iconTypes, icons);

  return (
    <Container>
      <Header>
        <Title>스킬 선택하기</Title>
        <CloseButton onClick={onModifyMode}>&times; </CloseButton>
      </Header>
      <CategoryList>
        {iconTypes.map((job) => (
          <CategoryItem
            active={selectedIconType === job ? true : false}
            onClick={() => setSelectedIconType(job)}
          >
            {job}
          </CategoryItem>
        ))}
      </CategoryList>
      <IconList>
        {icons[selectedIconType].map((item) => (
          <IconItem
            src={item.path}
            onClick={() => {
              console.log(selectedIconType);
            }}
          />
        ))}
      </IconList>
    </Container>
  );
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
