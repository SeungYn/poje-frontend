import styled from 'styled-components';
import useIconImagesSet from '../../../hooks/useIconImagesSet';
import icons from '../../../util/icons';

export default function PortfolioSkillAddPalette() {
  const { iconKeys, icons } = useIconImagesSet();
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
`;

const CategoryList = styled.ul``;

const CategoryItem = styled.li``;
