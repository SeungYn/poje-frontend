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
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const Container = styled.div`
  background: ${({ theme }) => theme.bgColor};
  width: 80%;
  margin: 0 auto;
  .icon {
    font-size: 2rem;
  }
  display: flex;
  border-radius: 1rem;
`;

const SearchBar = styled.input.attrs({ type: 'text' })`
  width: 100%;
`;

const SearchBtn = styled.button`
  flex-shrink: 0;
`;
