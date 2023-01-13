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
  padding: 0.6rem 0.6rem;
  background-color: ${(props) => props.theme.mainColorSemiDark};
  border-radius: 1px 0px 0px 0px;
`;
