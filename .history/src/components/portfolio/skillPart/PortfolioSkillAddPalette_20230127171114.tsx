import { useState } from 'react';
import styled from 'styled-components';
import useIconImagesSet from '../../../hooks/useIconImagesSet';
import { IconsKeyType } from '../../../util/icons';

export default function PortfolioSkillAddPalette() {
  const { iconKeys, icons } = useIconImagesSet();
  const [selectedJob, setSelectedJob] = useState<IconsKeyType | null>(null);
  console.log(iconKeys, icons);

  return (
    <Container>
      <CategoryList>
        {iconKeys.map((job) => (
          <CategoryItem>{job}</CategoryItem>
        ))}
      </CategoryList>
    </Container>
  );
}

const Container = styled.section`
  background: white;
  width: 100%;
`;

const CategoryList = styled.ul``;

const CategoryItem = styled.li``;
