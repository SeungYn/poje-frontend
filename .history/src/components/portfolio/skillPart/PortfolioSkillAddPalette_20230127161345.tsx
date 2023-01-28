import styled from 'styled-components';
import icons from '../../../util/icons';

export default function PortfolioSkillAddPalette() {
  console.log(icons);
  return (
    <Container>
      <CategoryList></CategoryList>
    </Container>
  );
}

const Container = styled.section`
  background: white;
`;

const CategoryList = styled.ul``;

const CategoryItem = styled.li``;
