import styled from 'styled-components';

export default function JobNavbarVerticality() {
  return <JobNav>ff</JobNav>;
}

const JobNav = styled.nav`
  background: ${({ theme }) => theme.bgSemiDarkColor};
  color: ${(props) => props.theme.textColor};
`;
