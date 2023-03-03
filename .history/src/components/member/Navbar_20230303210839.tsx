import styled from 'styled-components';

export default function Navbar() {
  return (
    <Container>
      <MemberNavbar>
        <Item>내 정보</Item>
        <Item>내 정보 수정하기</Item>
        <Item>비밀번호 변경하기</Item>
        <Item>좋아요 누른 포트폴리오</Item>
      </MemberNavbar>
    </Container>
  );
}

const Container = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
`;

const MemberNavbar = styled.nav``;

const Item = styled.a``;
