import JobPortfolioList from '@src/components/home/JobPage/JobPortfolioList';
import { mockPortfolioList } from '@src/test_util/mock/data/job';
import { withMemoryRouter } from '@src/test_util/util';
import { render } from '@testing-library/react';
import { Route } from 'react-router-dom';

describe('JobPortfolioList Component', () => {
  it('올바른 스냅샷 렌더링', () => {
    const { asFragment } = render(
      withMemoryRouter(
        <Route
          path='/'
          element={<JobPortfolioList list={mockPortfolioList} />}
        />,
        {
          initialEntries: ['/'],
        }
      )
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
