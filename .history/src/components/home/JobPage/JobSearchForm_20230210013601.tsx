import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
export default function JobSearchForm() {
  return (
    <Form>
      <Container>
        <BiSearchAlt2 className='icon' />
        <SearchBar />
        <SearchBtn />
      </Container>
    </Form>
  );
}

const Form = styled.form`
  position: relative;
  width: 100%;
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
  overflow: hidden;
`;

const SearchBar = styled.input.attrs({ type: 'text' })`
  width: 100%;
  border: none;
`;

const SearchBtn = styled.button`
  flex-shrink: 0;
  opacity: 0;
`;

const portfolioMakeBtn = styled.button`
  font-size: ${({ theme }) => theme.fontMiddleSize};
  position: absolute;
  right: 1rem;
`;
