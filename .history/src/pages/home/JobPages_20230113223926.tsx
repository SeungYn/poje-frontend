import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

enum NavType {
  developer = '개발자',
  designer = '디자이너',
  publisher = '퍼블리셔',
}

const navList = Object.freeze({
  developer: '개발자',
  designer: '디자이너',
  publisher: '퍼블리셔',
});

export default function JobPages() {
  const location = useLocation();
  const param = useParams();

  return (
    <Container>
      <JobNav>
        <JobList>
          <JobItem navType={param.type}>개발자</JobItem>
          <JobItem navType={param.type}>디자이너</JobItem>
          <JobItem navType={param.type}>퍼블리셔</JobItem>
        </JobList>
      </JobNav>
    </Container>
  );
}

const Container = styled.section`
  background-color: ${(props) => props.theme.mainColorSemiDark};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const JobNav = styled.nav`
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.textAccentColor};
  padding-top: 0.4rem;
`;

const JobList = styled.ul`
  display: flex;
`;

const JobItem = styled.li<{ navType?: string }>`
  width: 140px;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.8rem 1.4rem;
  background-color: ${(props) => props.theme.mainColorSemiDark};
  border-radius: 1rem 1rem 0px 0px;
  box-shadow: -1px 0px 5px 3px gray;
  z-index: ${(props) =>
    props.navType === undefined || props.navType === 'developer' ? 2 : 0};

  &:nth-child(2) {
    transform: translateX(-2rem);
    z-index: ${(props) => (props.navType === 'designer' ? 2 : 1)};
  }
  &:nth-child(3) {
    transform: translateX(-4rem);
    z-index: ${(props) => (props.navType === 'publisher' ? 2 : 0)};
  }
  &:nth-child(4) {
    transform: translateX(-6rem);
  }
`;

const PortFolioContainer = styled.div``;
