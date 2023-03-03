import { useSideNavbar } from '@src/hooks/member';
import { CSSProperties, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Navbar() {
  const [isOpen, containerRef, navbarRef, toggleHandler] = useSideNavbar<
    HTMLDivElement,
    HTMLUListElement
  >();

	const ActiveStyle: CSSProperties = {
		border: '1px solid black';
	}

  return (
    <Container ref={containerRef}>
      <MemberNavbar ref={navbarRef}>
        <NavLink
          style={({ isActive }) => (isActive ? 'isActive' : '')}
          to='/member'
        >
          내 정보
        </NavLink>
        <NavLink to='/member/modify'>내 정보 수정하기</NavLink>
        <NavLink to='/member/password'>비밀번호 변경하기</NavLink>
        <NavLink to='/member/like'>좋아요 누른 포트폴리오</NavLink>
      </MemberNavbar>
      <ToggleBtn onClick={() => toggleHandler()}>버튼</ToggleBtn>
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
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.textColor};
`;

const MemberNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bgColor};
  height: 100%;

  & > a {
    padding: 1rem;
    font-size: ${({ theme }) => theme.fontLargeRegular};
  }

  .isActive {
    border: 1px solid black;
  }
`;

const ToggleBtn = styled.button`
  border: 1px solid black;
  font-size: ${({ theme }) => theme.fontLargeRegular};
  flex-grow: 0;
  flex-shrink: 0;
`;
