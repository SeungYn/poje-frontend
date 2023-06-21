import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import usePortfolioCRUD from '@src/hooks/portfolio/usePortfolioCRUD';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { breakPoint } from '@src/styledComponents/media';
import useJobCategory from '@src/hooks/job/useJobCategory';
import useModal from '@src/hooks/common/useModal';

export default function JobSearchForm() {
  const { type, keyword: paramKeyword } = useParams<{
    type: string;
    keyword: string;
  }>();

  const navigate = useNavigate();
  const { category } = useJobCategory();
  const { createPortfolio } = usePortfolioCRUD();
  const { setModal } = useModal();

  const [keyword, setKeyword] = useState<string>(paramKeyword || '');
  const [jobCategoty, setJobCategory] = useState<string>(type!);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
  }, []);

  const onChangeCategory = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      setJobCategory(value);
    },
    []
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword === '') return setModal('키워드를 입력해주세요');
    navigate(`/job/${jobCategoty}/search/${keyword}/1`);
  };

  useEffect(() => {
    type && setJobCategory(type);
  }, [type]);

  return (
    <Form onSubmit={onSubmit}>
      <Container>
        <BiSearchAlt2 className='icon' title={'search-icon'} />
        <SearchBar onChange={onChange} value={keyword} />
        {paramKeyword && (
          <SelectBox
            name='jobCategory'
            onChange={onChangeCategory}
            value={jobCategoty}
          >
            {category.map((cate) => (
              <option key={cate.name} value={cate.name}>
                {cate.name}
              </option>
            ))}
          </SelectBox>
        )}
        <SearchBtn title='search-btn' />
      </Container>
      {type !== '전체' && (
        <PortfolioMakeBtn
          type='button'
          onClick={() => createPortfolio({ job: type || '전체' })}
        >
          포트폴리오 만들기
        </PortfolioMakeBtn>
      )}
    </Form>
  );
}

const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;

  @media screen and (max-width: ${breakPoint.mmm}) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  position: relative;
  background: ${({ theme }) => theme.bgColor};
  width: 60%;
  margin: 0 auto;
  .icon {
    font-size: 2rem;
  }
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  border-radius: 1rem;
  overflow: hidden;

  @media screen and (max-width: ${breakPoint.mmm}) {
    position: relative;
    width: 100%;
  }
`;

const SearchBar = styled.input.attrs({ type: 'text' })`
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontMiddleSize};
  padding: 0.4rem;
`;

const SearchBtn = styled.button`
  flex-shrink: 0;
  opacity: 0;
`;

const PortfolioMakeBtn = styled.button`
  font-size: ${({ theme }) => theme.fontRegular};
  position: absolute;
  right: 1rem;
  border: 2px solid ${({ theme }) => theme.bgColor};
  padding: 0.6rem;
  border-radius: 1rem;
  cursor: pointer;

  @media screen and (max-width: ${breakPoint.mmm}) {
    flex-direction: column;
    position: relative;
  }
`;

const SelectBox = styled.select`
  position: absolute;
  right: 0;
  height: 80%;
  border: none;
  border-left: 2px solid black;
  padding: 0 1rem;
  outline: none;
  font-size: 1.2rem;
`;
