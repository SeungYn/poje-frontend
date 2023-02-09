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
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
`;

const SearchBar = styled.input.attrs({ type: 'text' })`
  width: 70%;
`;
