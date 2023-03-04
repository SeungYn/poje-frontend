import styled from 'styled-components';

export default function MemberModify() {
  return (
    <Container>
      <Img />
      <ItemName />
      <ItemAcad />
      <ItemDept />
      <ItemBrith />
      <ItemPhone />
      <ItemEmail />
      <ItemGit />
      <ItemBlog />
      <SubmitBtn>확인</SubmitBtn>
      <CancleBtn>취소</CancleBtn>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
  max-width: 600px;
  max-height: 400px;
  display: grid;
  grid-gap: 0.4rem;
  grid-template-areas:
    'img img name name'
    'img img academic academic'
    'img img dept dept '
    'brith brith brith brith'
    'phoneNum phoneNum phoneNum phoneNum'
    'email email email email'
    'gitHubLink gitHubLink gitHubLink gitHubLink'
    'blogLink blogLink blogLink blogLink'
    'submit submit cancle cancle';
  grid-template-columns: repeat(4, 1fr);
`;

const Img = styled.img`
  grid-area: img;
  border-radius: 50%;
`;

const Test = styled.input`
  grid-area: img;
  width: 100%;
`;

const CommonInput = styled.input`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.6rem;
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  outline: none;
  width: 100%;
`;

const ItemName = styled(CommonInput)`
  grid-area: name;
`;

const ItemAcad = styled(CommonInput)`
  grid-area: academic;
`;

const ItemDept = styled(CommonInput)`
  grid-area: dept;
`;

const ItemBrith = styled(CommonInput)`
  grid-area: brith;
`;

const ItemPhone = styled(CommonInput)`
  grid-area: phoneNum;
`;

const ItemEmail = styled(CommonInput)`
  grid-area: email;
`;

const ItemGit = styled(CommonInput)`
  grid-area: gitHubLink;
`;

const ItemBlog = styled(CommonInput)`
  grid-area: blogLink;
`;

const Btn = styled.button``;

const SubmitBtn = styled(Btn)`
  grid-area: submit;
`;
const CancleBtn = styled(Btn)`
  grid-area: cancle;
`;
