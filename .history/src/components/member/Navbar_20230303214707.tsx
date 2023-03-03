import { useRef } from 'react';
import styled from 'styled-components';

export default function Navbar() {
  const navbarRef = useRef<HTMLUListElement>(null);
  const ContainerRef = useRef<HTMLDivElement>(null);

  const onClick = () => {
    console.log(navbarRef.current?.offsetWidth);
    if (ContainerRef.current) {
      ContainerRef.current.style.transform = `translateX(-1px)`;
    }
  };
  return (
    <Container ref={ContainerRef}>
      <MemberNavbar ref={navbarRef}>
        <Item href='#'>내 정보</Item>
        <Item href='#'>내 정보 수정하기</Item>
        <Item href='#'>비밀번호 변경하기</Item>
        <Item href='#'>좋아요 누른 포트폴리오</Item>
      </MemberNavbar>
      <ToggleBtn onClick={onClick}>버튼</ToggleBtn>
    </Container>
  );
}

const Container = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  align-items: flex-start;
`;

const MemberNavbar = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Item = styled.a`
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontLargeRegular};
`;

const ToggleBtn = styled.button`
  border: 1px solid black;
  font-size: ${({ theme }) => theme.fontLargeRegular};
  flex-grow: 0;
  flex-shrink: 0;
`;
