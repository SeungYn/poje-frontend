import styled from 'styled-components';

export default function JobSearchForm() {
  return (
    <Form>
      <SearchBar />
    </Form>
  );
}

const Form = styled.form`
  position: sticky;
  top: 0;
  z-index: 10;
`;
const SearchBar = styled.input.attrs({ type: 'text' })``;
