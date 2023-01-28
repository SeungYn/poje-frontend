import styled from 'styled-components';

const navList: NavType = Object.freeze({
  developer: '개발자',
  designer: '디자이너',
  publisher: '퍼블리셔',
  a: '1',
});

export default function JobNavbarVerticality() {
  return <JobNav>ff</JobNav>;
}

const JobNav = styled.nav`
  background: ${({ theme }) => theme.bgSemiDarkColor};
  color: ${(props) => props.theme.textColor};
`;
