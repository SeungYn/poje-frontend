import ProfileItemRemaster from '@src/components/home/JobPage/ProfileItemRemaster';
import { mockPortfolioList } from '@src/test_util/mock/data/job';
import { withMemoryRouter } from '@src/test_util/util';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route, useParams } from 'react-router-dom';

describe('ProfileItemRemaster Component', () => {
  it('올바른 화면', () => {
    const { asFragment } = render(
      withMemoryRouter(
        <Route
          path='/'
          element={<ProfileItemRemaster {...mockPortfolioList[0]} />}
        />,
        { initialEntries: ['/'] }
      )
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('아이템 클릭시 포트폴리오 페이지로 이동', () => {
    const PortfolioPage = () => {
      const { portfolioId } = useParams();
      return <div>{portfolioId}</div>;
    };

    render(
      withMemoryRouter(
        <>
          <Route
            path='/'
            element={<ProfileItemRemaster {...mockPortfolioList[0]} />}
          />
          <Route path='/portfolio/:portfolioId' element={<PortfolioPage />} />
        </>,
        { initialEntries: ['/'] }
      )
    );

    const title = screen.getByRole('heading', { level: 2 });
    userEvent.click(title);

    expect(
      screen.getByText(mockPortfolioList[0].portfolioId)
    ).toBeInTheDocument();
  });
});
