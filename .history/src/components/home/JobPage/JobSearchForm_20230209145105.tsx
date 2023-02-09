import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
export default function JobSearchForm() {
  return (
    <Form>
      <Container>
        <BiSearchAlt2 />
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
  width: 100%;
`;

const SearchBar = styled.input.attrs({ type: 'text' })`
  width: 70%;
`;
