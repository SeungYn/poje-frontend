import styled from 'styled-components';

export default function JobSearchForm() {
  return (
    <Form>
      <SearchBar />
    </Form>
  );
}

const Form = styled.form`
  position: absolute;
`;
const SearchBar = styled.input.attrs({ type: 'text' })``;
