import { useState } from 'react';
import styled from 'styled-components';
import useIconImagesSet from '../../../hooks/useIconImagesSet';
import { IconsKeyType } from '../../../util/icons';

export default function PortfolioSkillAddPalette() {
  const { iconKeys, icons } = useIconImagesSet();
  const [selectedJob, setSelectedJob] = useState<IconsKeyType>('frontend');
  console.log(iconKeys, icons);

  return (
    <Container>
      <Header>
        <CloseButton>&times; </CloseButton>
      </Header>
      <CategoryList>
        {iconKeys.map((job) => (
          <CategoryItem>{job}</CategoryItem>
        ))}
      </CategoryList>
      <IconList>
        {icons[selectedJob].map((item) => (
          <IconItem src={item} />
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
  right: 10px;
`;

const CategoryList = styled.ul`
  display: flex;
`;

const CategoryItem = styled.li``;

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
