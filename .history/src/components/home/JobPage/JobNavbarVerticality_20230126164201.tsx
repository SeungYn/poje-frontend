import styled from 'styled-components';

export default function JobNavbarVerticality() {
  return <JobNav>ff</JobNav>;
}

const JobNav = styled.nav`
  background: ${({ theme }) => theme.bgSemiDarkColor}
  color: ${(props) => props.theme.textAccentColor};
  padding-top: 1.6rem;
  padding-left: 4rem;
  box-shadow: 0px -1px 1px gray inset;
  position: relative;
`;
