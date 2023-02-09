import styled from 'styled-components';

export default function JobSearchForm() {
  return (
    <Form>
      <Container>
        <SearchBar />
      </Container>
    </Form>
  );
}

const Form = styled.form`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const Container = styled.div`
  margin: 0 auth;
`;

const SearchBar = styled.input.attrs({ type: 'text' })`
  width: 70%;
`;
