import { useModifyMyInfo } from '@src/hooks/member';
import styled from 'styled-components';

export default function MemberModify() {
  const { form } = useModifyMyInfo();
  console.log(form);
  return (
    <Container>
      <Img src={form.profileImg} />
      <ItemName>
        <label>이름</label>
        <CommonInput />
      </ItemName>
      <ItemAcad>
        <label>학력</label>
        <CommonInput />
      </ItemAcad>
      <ItemDept>
        <label>학과</label>
        <CommonInput />
      </ItemDept>
      <ItemBrith>
        <label>생일</label>
        <CommonInput />
      </ItemBrith>
      <ItemPhone>
        <label>전화번호</label>
        <CommonInput />
      </ItemPhone>
      <ItemEmail>
        <label>이메일</label>
        <CommonInput />
      </ItemEmail>
      <ItemGit>
        <label>깃허브 링크</label>
        <CommonInput />
      </ItemGit>
      <ItemBlog>
        <label>블로그 링크</label>
        <CommonInput />
      </ItemBlog>
      <SubmitBtn>확인</SubmitBtn>
      <CancleBtn>취소</CancleBtn>
      <div>1</div>
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

const Btn = styled.button``;

const SubmitBtn = styled(Btn)`
  grid-area: submit;
`;
const CancleBtn = styled(Btn)`
  grid-area: cancle;
`;
