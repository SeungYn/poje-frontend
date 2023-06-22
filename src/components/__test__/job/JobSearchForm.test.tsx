import JobSearchForm from '@src/components/home/JobPage/JobSearchForm';
import useJobCategory from '@src/hooks/job/useJobCategory';
import usePortfolioCRUD from '@src/hooks/portfolio/usePortfolioCRUD';
import { mockJobCategory } from '@src/test_util/mock/data/job';
import {
  addMockFunctionType,
  withAllContext,
  withMemoryRouter,
} from '@src/test_util/util';
import { render, screen } from '@testing-library/react';
import { Route } from 'react-router-dom';

jest.mock('@src/hooks/job/useJobCategory');
jest.mock('@src/hooks/portfolio/usePortfolioCRUD');

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const originModule =
    jest.requireActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...originModule,
    useNavigate: () => mockUseNavigate,
  };
});

const mockUseJobCategory: jest.Mock = addMockFunctionType(useJobCategory);
const mockUsePortfolioCRUD: jest.Mock = addMockFunctionType(usePortfolioCRUD);

describe('JobSearchForm Component', () => {
  beforeEach(() => {
    mockUseJobCategory.mockImplementation(() => ({
      category: mockJobCategory,
    }));
  });

  afterEach(() => {
    mockUseJobCategory.mockReset();
    mockUsePortfolioCRUD.mockReset();
    mockUseNavigate.mockReset();
  });

  it('스냅샷 테스트 with param이 주어졌을 때', () => {
    const mockCreatePortfolio = jest.fn();
    const mockNavigate = jest.fn();

    mockUsePortfolioCRUD.mockImplementation(() => ({
      createPortfolio: mockCreatePortfolio,
    }));
    mockUseNavigate.mockImplementation(() => ({
      createPortfolio: mockNavigate,
    }));

    const { asFragment } = render(
      withAllContext(
        withMemoryRouter(
          <Route
            path='/job/:type/search/:keyword'
            element={<JobSearchForm />}
          />,
          {
            initialEntries: ['/job/개발자/search/개발자'],
          }
        )
      )
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('경로에 "전체"라는 타입이 없으면 포트폴리오 만들기 버튼 렌더링', () => {
    const mockCreatePortfolio = jest.fn();
    const mockNavigate = jest.fn();

    mockUsePortfolioCRUD.mockImplementation(() => ({
      createPortfolio: mockCreatePortfolio,
    }));
    mockUseNavigate.mockImplementation(() => ({
      createPortfolio: mockNavigate,
    }));

    render(
      withAllContext(
        withMemoryRouter(
          <Route
            path='/job/:type/search/:keyword'
            element={<JobSearchForm />}
          />,
          {
            initialEntries: ['/job/개발자/search/개발자'],
          }
        )
      )
    );

    expect(screen.getByText('포트폴리오 만들기')).toBeInTheDocument();
  });

  it('경로에 "전체"라는 타입이 있으면 포트폴리오 만들기 버튼 렌더링 안함 ❌', () => {
    const mockCreatePortfolio = jest.fn();
    const mockNavigate = jest.fn();

    mockUsePortfolioCRUD.mockImplementation(() => ({
      createPortfolio: mockCreatePortfolio,
    }));
    mockUseNavigate.mockImplementation(() => ({
      createPortfolio: mockNavigate,
    }));

    render(
      withAllContext(
        withMemoryRouter(
          <Route
            path='/job/:type/search/:keyword'
            element={<JobSearchForm />}
          />,
          {
            initialEntries: ['/job/전체/search/개발자'],
          }
        )
      )
    );

    expect(screen.queryByText('포트폴리오 만들기')).not.toBeInTheDocument();
	});
	
	it('검색어 입력 후 검색 함수 호출', () => {
    const mockCreatePortfolio = jest.fn();
    const mockNavigate = jest.fn();

    mockUsePortfolioCRUD.mockImplementation(() => ({
      createPortfolio: mockCreatePortfolio,
    }));
    mockUseNavigate.mockImplementation(() => ({
      createPortfolio: mockNavigate,
    }));

    render(
      withAllContext(
        withMemoryRouter(
          <Route
            path='/job/:type/search/:keyword'
            element={<JobSearchForm />}
          />,
          {
            initialEntries: ['/job/전체/search/개발자'],
          }
        )
      )
    );

    expect(screen.queryByText('포트폴리오 만들기')).not.toBeInTheDocument();
  });
});
