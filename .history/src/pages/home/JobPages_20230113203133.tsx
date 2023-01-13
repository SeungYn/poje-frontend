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
  width: 120px;
  border-bottom: 80px solid orange;
  border-left: 20px solid black;
  border-right: 20px solid black;
  height: 0;
  text-align: center;
  line-height: 80px;
  border-radius: 26px 26px 6px 6px/ 80px 80px 6 6;
`;
