import styled from 'styled-components';

export default function JobSearchForm() {
  return (
    <Form>
      <SearchBar />
    </Form>
  );
}

const Form = styled.form``;
const SearchBar = styled.input.attrs({ type: 'text' })``;
