import JobCategory from '@src/components/home/JobPage/JobCategory';
import useUser from '@src/hooks/auth/useUser';
import useJobCategory from '@src/hooks/job/useJobCategory';
import { mockJobCategory } from '@src/test_util/mock/data/job';
import { withAllContext, withMemoryRouter } from '@src/test_util/util';
import { render } from '@testing-library/react';
import { Route } from 'react-router-dom';

jest.mock('@src/hooks/auth/useUser');
jest.mock('@src/hooks/job/useJobCategory');

const mockUseUser: jest.Mock = useUser as jest.MockedFunction<any>;
const mockUseJobCategory: jest.Mock =
  useJobCategory as jest.MockedFunction<any>;

describe('JobCategoty Component', () => {
  beforeEach(() => {
    mockUseJobCategory.mockImplementation(() => ({
      category: mockJobCategory,
    }));
  });

  afterEach(() => {
    mockUseUser.mockReset();
    mockUseJobCategory.mockReset();
  });

  it('로그인 했을 때 화면', () => {
    mockUseUser.mockImplementation(() => ({ user: true }));

    const { asFragment } = render(
      withAllContext(
        withMemoryRouter(<Route path='/' element={<JobCategory />} />, {
          initialEntries: ['/'],
        })
      )
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('로그인 안 했을 때 화면', () => {
    mockUseUser.mockImplementation(() => ({ user: false }));

    const { asFragment } = render(
      withAllContext(
        withMemoryRouter(<Route path='/' element={<JobCategory />} />, {
          initialEntries: ['/'],
        })
      )
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
