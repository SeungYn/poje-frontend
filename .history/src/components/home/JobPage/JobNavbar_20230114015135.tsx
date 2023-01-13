import { Link, useLocation, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';

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

export default function JobNavbar() {
  const param = useParams();
  return (
    <JobNav>
      <JobList>
        {Object.keys(navList).map((type, i) => (
          <JobItem key={type} navType={param.type} index={i} list={navList}>
            <Link to={`/job/${type}`}>{navList[type]}</Link>
          </JobItem>
        ))}
      </JobList>
    </JobNav>
  );
}

const JobNav = styled.nav`
  width: 100%;
  background: rgb(249, 249, 249, 0.47);
  color: ${(props) => props.theme.textAccentColor};
  padding-top: 1.6rem;
  margin-left: 0.5rem;
`;

const JobList = styled.ul`
  display: flex;
`;

interface JobItemType {
  navType?: string;
  index: number;
  list: NavType;
}

function bookmarkOrder(navList: NavType, currentNav?: string) {
  let style = '';
  let count = 5;
  let flag = true;
  Object.keys(navList).forEach((type, i) => {
    if (currentNav === type) flag = false;
    if (flag) count++;
    else count--;

    style += `&:nth-child(${i + 1}) {
      transform: translateX(-${i * 2}rem) ${
      currentNav === type ? `scale(1.1);` : ';'
    };
      z-index: ${currentNav === type ? 10 : count};
			${currentNav === type && 'filter: brightness(1);'}
    }`;
  });

  return css`
    ${style}
  `;
}

const JobItem = styled.li<JobItemType>`
  width: 100px;
  font-size: 1.1rem;
  font-weight: 500;

  background-color: ${(props) => props.theme.mainColorSemiDark};
  border-radius: 1rem 1rem 0px 0px;
  box-shadow: -1px 0px 5px 3px gray;
  filter: brightness(0.9);
  ${({ list, navType }) => bookmarkOrder(list, navType)}

  & a {
    display: block;
    padding: 0.8rem 1rem;
  }
`;
