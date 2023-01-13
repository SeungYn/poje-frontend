import styled from 'styled-components';

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
  height: 100%;
`;

const JobNav = styled.nav`
  width: 100%;
  border: 1px solid ${(props) => props.theme.mainColor};
`;

const JobList = styled.ul`
  display: flex;
  perspective: 90px;
`;

const JobItem = styled.li`
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.8rem 1.4rem;
  background-color: ${(props) => props.theme.mainColorSemiDark};
  border-radius: 1rem 1rem 0px 0px;
  border: 1px solid black;
  box-shadow: 5px 0px 2px 1px ${(props) => props.theme.mainColorSemiDark};

  &:nth-child(2) {
    transform: translateX(-2rem);
  }
  &:nth-child(3) {
    transform: translateX(-4rem);
  }
  &:nth-child(4) {
    transform: translateX(-6rem);
  }
`;
