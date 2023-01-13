import styled from 'styled-components';

export default function JobPages() {
  return (
    <Container>
      <JobNav>
        <JobList>
          <JobItem>개발자</JobItem>
          <JobItem>디자이너</JobItem>
        </JobList>
      </JobNav>
    </Container>
  );
}

const Container = styled.section``;

const JobNav = styled.nav``;

const JobList = styled.ul``;

const JobItem = styled.li``;
