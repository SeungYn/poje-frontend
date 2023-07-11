import PortfolioIntroModify from '@src/components/portfolio/introPart/PortfolioIntroModify';
import usePortfolioIntro from '@src/hooks/portfolio/intro/usePortfolioIntro';
import usePortfolioModifyForm from '@src/hooks/portfolio/intro/usePortfolioModifyForm';
import { mockPortfolioIntro } from '@src/test_util/mock/data/portfolio';
import { withAllContext } from '@src/test_util/util';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRef } from 'react';

jest.mock('@src/hooks/portfolio/intro/usePortfolioIntro');
jest.mock('@src/hooks/portfolio/intro/usePortfolioModifyForm');

const mockUsePortfolioIntro: jest.Mock =
  usePortfolioIntro as unknown as jest.MockedFunction<any>;
const mockUsePortfolioModifyForm: jest.Mock =
  usePortfolioModifyForm as unknown as jest.MockedFunction<any>;

describe('PortfolioIntroModify Component test', () => {
  afterEach(() => {
    mockUsePortfolioIntro.mockReset();
    mockUsePortfolioModifyForm.mockReset();
  });

  it('snapshot test 로딩중 표시', () => {
    mockUsePortfolioIntro.mockImplementation(() => ({
      pfIntro: mockPortfolioIntro,
      isMutating: true,
      isFetching: true,
      updateIntro: () => {},
    }));
    mockUsePortfolioModifyForm.mockImplementation(() => ({
      copiedPfIntro: mockPortfolioIntro,
      onChangeInputEl: () => {},
      discriptionRef: useRef(),
      handleSubmit: () => {},
    }));

    const { asFragment } = render(withAllContext(<PortfolioIntroModify />));

    expect(screen.getByText('업데이트중')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('snapshot test 로딩중이 아닐 때 ❌', () => {
    mockUsePortfolioIntro.mockImplementation(() => ({
      pfIntro: mockPortfolioIntro,
      isMutating: false,
      isFetching: false,
      updateIntro: () => {},
    }));
    mockUsePortfolioModifyForm.mockImplementation(() => ({
      copiedPfIntro: mockPortfolioIntro,
      onChangeInputEl: () => {},
      discriptionRef: useRef(),
      handleSubmit: () => {},
    }));

    const { asFragment } = render(withAllContext(<PortfolioIntroModify />));

    expect(screen.queryByText('업데이트중')).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('handleSubmit 호출 확인 ✅', async () => {
    const mockHandelSubmit = jest.fn((e) => e.preventDefault());
    mockUsePortfolioIntro.mockImplementation(() => ({
      pfIntro: mockPortfolioIntro,
      isMutating: false,
      isFetching: false,
      updateIntro: () => {},
    }));
    mockUsePortfolioModifyForm.mockImplementation(() => ({
      copiedPfIntro: mockPortfolioIntro,
      onChangeInputEl: () => {},
      discriptionRef: useRef(),
      handleSubmit: mockHandelSubmit,
    }));

    render(withAllContext(<PortfolioIntroModify />));

    const submitBtn = screen.getByText('확인');
    userEvent.click(submitBtn);

    expect(mockHandelSubmit).toBeCalled();
  });
});
