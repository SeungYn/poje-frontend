import styled from 'styled-components';

export default function MemberModify() {
  return (
    <Container>
      <Img src='' />
      <ItemName>3</ItemName>
      <ItemAcad>4</ItemAcad>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'img img name name'
    'img img academic academic'
    '. . dept dept '
    'brith brith brith brith'
    'phoneNum phoneNum phoneNum phoneNum'
    'email email email email'
    'gitHubLink gitHubLink gitHubLink gitHubLink'
    'blogLink blogLink blogLink blogLink';
`;

const Img = styled.img`
  grid-area: img;
`;

const ItemName = styled.div`
  grid-area: name;
`;

const ItemAcad = styled.div`
  grid-area: name;
`;

const ItemDept = styled.div`
  grid-area: name;
`;

const ItemBrith = styled.div`
  grid-area: name;
`;

const ItemPhone = styled.div`
  grid-area: name;
`;

const ItemEmail = styled.div`
  grid-area: name;
`;

const ItemGit = styled.div`
  grid-area: name;
`;

const ItemBlog = styled.div`
  grid-area: name;
`;
