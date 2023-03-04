import styled from 'styled-components';

export default function MemberModify() {
  return (
    <Container>
      <Img src='' />
      <ItemName />
      <ItemAcad />
      <ItemDept />
      <ItemBrith />
      <ItemPhone />
      <ItemEmail />
      <ItemGit />
      <ItemBlog />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  display: grid;
  grid-template-areas:
    'img img name name'
    'img img academic academic'
    'img img dept dept '
    'brith brith brith brith'
    'phoneNum phoneNum phoneNum phoneNum'
    'email email email email'
    'gitHubLink gitHubLink gitHubLink gitHubLink'
    'blogLink blogLink blogLink blogLink';
`;

const Img = styled.img`
  grid-area: img;
`;

const ItemName = styled.input`
  grid-area: name;
`;

const ItemAcad = styled.input`
  grid-area: academic;
`;

const ItemDept = styled.input`
  grid-area: dept;
`;

const ItemBrith = styled.input`
  grid-area: brith;
`;

const ItemPhone = styled.input`
  grid-area: phoneNum;
`;

const ItemEmail = styled.input`
  grid-area: email;
`;

const ItemGit = styled.input`
  grid-area: gitHubLink;
`;

const ItemBlog = styled.input`
  grid-area: blogLink;
`;
