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
  background: white;
  width: 100%;
`;

const CategoryList = styled.ul``;

const CategoryItem = styled.li``;

const IconList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const IconItem = styled.img`
  width: '1000px';
  height: '100px';
`;
