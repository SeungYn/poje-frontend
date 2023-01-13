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

const Container = styled.section``;

const JobNav = styled.nav``;

const JobList = styled.ul`
  display: flex;
`;

const JobItem = styled.li`
  perspective: 100px;
  width: 100px;
  height: 100px;
  background-color: black;
  transform: rotateX(60deg);
`;
