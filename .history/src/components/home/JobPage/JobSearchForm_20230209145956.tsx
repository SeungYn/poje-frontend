import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
export default function JobSearchForm() {
  return (
    <Form>
      <Container>
        <BiSearchAlt2 className='icon' />
        <SearchBar />
        <SearchBtn>검색</SearchBtn>
      </Container>
    </Form>
  );
}

const Form = styled.form`
  top: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background: ${({ theme }) => theme.bgColor};
  width: auto;
`;

const SearchBar = styled.input.attrs({ type: 'text' })`
  width: 70%;
`;

const SearchBtn = styled.button``;
