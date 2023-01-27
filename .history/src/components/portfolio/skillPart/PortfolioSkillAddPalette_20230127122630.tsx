import styled from 'styled-components';

export default function PortfolioSkillAddPalette() {
  console.log(`${process.env.PUBLIC_URL}/public_assets/`);
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
