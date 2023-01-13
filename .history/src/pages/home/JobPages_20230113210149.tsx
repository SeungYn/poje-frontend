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
  perspective: 1000px;
`;

const JobItem = styled.li`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  transform: rotateX(60deg);
`;
