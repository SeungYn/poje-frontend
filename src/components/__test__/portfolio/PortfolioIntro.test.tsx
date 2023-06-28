import PortfolioIntro from '@src/components/portfolio/introPart/PortfolioIntro';
import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import usePortfolioIntro from '@src/hooks/portfolio/intro/usePortfolioIntro';
import { mockPortfolioIntro } from '@src/test_util/mock/data/portfolio';
import { withAllContext } from '@src/test_util/util';
import { render, screen } from '@testing-library/react';

jest.mock('@src/hooks/portfolio/intro/usePortfolioIntro');
jest.mock('@src/context/PortfolioInfoContext');

const mockUsePortfolioIntro: jest.Mock =
  usePortfolioIntro as unknown as jest.MockedFunction<any>;
const mockUsePortfolioInfo: jest.Mock =
  usePortfolioInfo as unknown as jest.MockedFunction<any>;

describe('PortfolioIntro Component', () => {
  afterEach(() => {
    mockUsePortfolioIntro.mockReset();
    mockUsePortfolioInfo.mockReset();
  });

  it('snapshot test 수정권한이 있을 때', () => {
    mockUsePortfolioIntro.mockImplementation(() => ({
      pfIntro: mockPortfolioIntro,
    }));
    mockUsePortfolioInfo.mockImplementation(() => ({ permissionModify: true }));

    const { asFragment } = render(withAllContext(<PortfolioIntro />));

    expect(screen.getByText('수정')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('snapshot test 수정권한이 없을 때', () => {
    mockUsePortfolioIntro.mockImplementation(() => ({
      pfIntro: mockPortfolioIntro,
    }));
    mockUsePortfolioInfo.mockImplementation(() => ({
      permissionModify: false,
    }));

    const { asFragment } = render(withAllContext(<PortfolioIntro />));

    expect(screen.queryByText('수정')).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
