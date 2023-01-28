import styled from 'styled-components';

type NavType = {
  developer: string;
  designer: string;
  publisher: string;
  [key: string]: string;
};

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

const JobList = styled.ul`
  display: flex;
`;

const JobItem = styled.li<JobItemType>`
  width: 100px;
  font-size: 1.1rem;
  font-weight: 500;

  background-color: ${(props) => props.theme.mainColorSemiDark};
  border-radius: 1rem 1rem 0px 0px;
  box-shadow: -2px -1px 4px 3px gray;
  filter: brightness(0.9);
  ${({ list, navType }) => bookmarkOrder(list, navType)}

  &:hover {
    z-index: 11;
  }

  & a {
    display: block;
    padding: 0.8rem 1rem;
  }
`;
