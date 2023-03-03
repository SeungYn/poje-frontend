import styled from 'styled-components';

export default function Navbar() {
  return (
    <Container>
      <MemberNavbar>
        <Item href='#'>내 정보</Item>
        <Item href='#'>내 정보 수정하기</Item>
        <Item href='#'>비밀번호 변경하기</Item>
        <Item href='#'>좋아요 누른 포트폴리오</Item>
      </MemberNavbar>
    </Container>
  );
}

const Container = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;

const MemberNavbar = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Item = styled.a`
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontLargeRegular};
`;

const ToggleBtn = styled.button``;
