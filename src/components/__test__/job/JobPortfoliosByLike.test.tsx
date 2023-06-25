import JobPortfoliosByLike from '@src/components/home/JobPage/JobPortfoliosByLike';
import { usePortfolioListsByLike } from '@src/hooks/member';
import { mockAPIPortfolioList } from '@src/test_util/mock/data/job';
import { render } from '@testing-library/react';
import { useParams } from 'react-router-dom';

jest.mock('@src/hooks/member');
jest.mock('react-router-dom');

const mockUsePortfolioListsByLike: jest.Mock =
  usePortfolioListsByLike as jest.MockedFunction<any>;
const mockUseParams: jest.Mock = useParams as jest.MockedFunction<any>;

describe('JobPortfoliosByLike', () => {
  it('스냅샷 테스트', () => {
    mockUsePortfolioListsByLike.mockImplementation(() => ({
      pageingUtil: mockAPIPortfolioList.paging,
      pfAndMemberResp: mockAPIPortfolioList.pfAndMemberResp,
    }));
    mockUseParams.mockImplementation(() => ({ page: 1 }));

    const { asFragment } = render(<JobPortfoliosByLike />);

    expect(asFragment()).toMatchSnapshot();
  });
});
