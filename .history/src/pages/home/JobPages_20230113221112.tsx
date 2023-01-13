import styled from 'styled-components';

const navList = Object.freeze({
  a: 1,
  b: 2,
});

export default function JobPages() {
  return (
    <Container>
      <JobNav>
        <JobList>
          <JobItem>개발자</JobItem>
          <JobItem>디자이너</JobItem>
          <JobItem>퍼블리셔</JobItem>
          <JobItem>장사의신</JobItem>
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
  border: 1px solid ${(props) => props.theme.mainColor};
  background: rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.textAccentColor};
`;

const JobList = styled.ul`
  display: flex;
`;

const JobItem = styled.li`
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.8rem 1.4rem;
  background-color: ${(props) => props.theme.mainColorSemiDark};
  border-radius: 1rem 1rem 0px 0px;

  box-shadow: -1px 0px 5px 3px gray;

  &:nth-child(2) {
    transform: translateX(-2rem);
  }
  &:nth-child(3) {
    transform: translateX(-4rem);
    z-index: 1;
  }
  &:nth-child(4) {
    transform: translateX(-6rem);
  }
`;

const PortFolioContainer = styled.div``;
