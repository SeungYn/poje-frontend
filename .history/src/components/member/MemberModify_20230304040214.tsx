import { useModifyMyInfo } from '@src/hooks/member';
import { breakPoint } from '@src/styledComponents/media';
import { useRef } from 'react';
import styled from 'styled-components';

export default function MemberModify() {
  const { form, onChange } = useModifyMyInfo();
  const hiddenFileBtnRef = useRef<HTMLInputElement>(null);
  console.log(form);
  return (
    <Container>
      <ImgWrapper onClick={() => hiddenFileBtnRef.current?.click()}>
        <Img src={form.profileImg} />
      </ImgWrapper>
      <ItemName>
        <label>이름</label>
        <CommonInput
          name='nickName'
          value={form.nickName}
          onChange={onChange}
        />
      </ItemName>
      <ItemAcad>
        <label>학력</label>
        <CommonInput
          name='academic'
          value={form.academic}
          onChange={onChange}
        />
      </ItemAcad>
      <ItemDept>
        <label>학과</label>
        <CommonInput name='dept' value={form.dept} onChange={onChange} />
      </ItemDept>
      <ItemBrith>
        <label>생일</label>
        <CommonInput name='birth' value={form.birth} onChange={onChange} />
      </ItemBrith>
      <ItemPhone>
        <label>전화번호</label>
        <CommonInput
          name='phoneNum'
          value={form.phoneNum}
          onChange={onChange}
        />
      </ItemPhone>
      <ItemEmail>
        <label>이메일</label>
        <CommonInput name='email' value={form.email} onChange={onChange} />
      </ItemEmail>
      <ItemGit>
        <label>깃허브 링크</label>
        <CommonInput
          name='gitHubLink'
          value={form.gitHubLink}
          onChange={onChange}
        />
      </ItemGit>
      <ItemBlog>
        <label>블로그 링크</label>
        <CommonInput
          name='blogLink'
          value={form.blogLink}
          onChange={onChange}
        />
      </ItemBlog>
      <SubmitBtn>확인</SubmitBtn>
      <CancleBtn>취소</CancleBtn>
      <input
        ref={hiddenFileBtnRef}
        type='file'
        style={{ display: 'none' }}
        accept={'image/gif, image/jpeg, image/png'}
        name={'file'}
        onChange={onChange}
      />
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
  max-width: 600px;
  max-height: 800px;
  display: grid;
  grid-gap: 0.4rem;
  grid-row-gap: 0.8rem;
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
  grid-auto-rows: 1fr;
  justify-items: center;

  @media screen and (max-width: ${breakPoint.s}) {
    grid-template-areas:
      'img img img img'
      'img img img img'
      'img img img img'
      'name name name name'
      'academic academic academic academic'
      'dept dept dept dept '
      'brith brith brith brith'
      'phoneNum phoneNum phoneNum phoneNum'
      'email email email email'
      'gitHubLink gitHubLink gitHubLink gitHubLink'
      'blogLink blogLink blogLink blogLink'
      'submit submit cancle cancle';
  }
`;

const Img = styled.img`
  height: 100%;
`;

const ImgWrapper = styled.div`
  cursor: pointer;
  grid-area: img;
  border-radius: 50%;
  overflow: hidden;
  height: 100%;
  position: relative;
  &:hover::before {
    content: '이미지 선택하기';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(183, 183, 183, 0.374);
    left: 0;
    top: 0;
  }
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

const CommonItem = styled.div`
  width: 100%;
`;

const ItemName = styled(CommonItem)`
  grid-area: name;
`;

const ItemAcad = styled(CommonItem)`
  grid-area: academic;
`;

const ItemDept = styled(CommonItem)`
  grid-area: dept;
`;

const ItemBrith = styled(CommonItem)`
  grid-area: brith;
`;

const ItemPhone = styled(CommonItem)`
  grid-area: phoneNum;
`;

const ItemEmail = styled(CommonItem)`
  grid-area: email;
`;

const ItemGit = styled(CommonItem)`
  grid-area: gitHubLink;
`;

const ItemBlog = styled(CommonItem)`
  grid-area: blogLink;
`;

const Btn = styled.button``;

const SubmitBtn = styled(Btn)`
  grid-area: submit;
`;
const CancleBtn = styled(Btn)`
  grid-area: cancle;
`;
