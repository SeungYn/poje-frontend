import styled from 'styled-components';

export default function MemberModify() {
  return (
    <Container>
      <Img src='' />
      <ItemName>3</ItemName>
      <ItemAcad>4</ItemAcad>
      <ItemDept>5</ItemDept>
      <ItemBrith>6</ItemBrith>
      <ItemPhone>7</ItemPhone>
      <ItemEmail>8</ItemEmail>
      <ItemGit>9</ItemGit>
      <ItemBlog>10</ItemBlog>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 800px;
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
  grid-area: academic;
`;

const ItemDept = styled.div`
  grid-area: dept;
`;

const ItemBrith = styled.div`
  grid-area: brith;
`;

const ItemPhone = styled.div`
  grid-area: phoneNum;
`;

const ItemEmail = styled.div`
  grid-area: email;
`;

const ItemGit = styled.div`
  grid-area: gitHubLink;
`;

const ItemBlog = styled.div`
  grid-area: blogLink;
`;
