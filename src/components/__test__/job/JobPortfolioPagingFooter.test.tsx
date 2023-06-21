import JobPortfolioPagingFooter from '@src/components/home/JobPage/JobPortfolioPagingFooter';
import { mockPageging } from '@src/test_util/mock/data/job';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom');
const mockUseNavigate: jest.Mock =
  useNavigate as unknown as jest.MockedFunction<any>;

describe('JobPortfolioPagingFooter Component', () => {
  afterEach(() => {
    mockUseNavigate.mockReset();
  });

  it('1~5 페이지 출력', () => {
    const { asFragment } = render(
      <JobPortfolioPagingFooter {...mockPageging} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('페이지 클릭시 해당 페이지 번호 페이지로 이동', () => {
    const mockNavigate = jest.fn();
    mockUseNavigate.mockImplementation(() => mockNavigate);

    render(<JobPortfolioPagingFooter {...mockPageging} />);

    // 다음 버튼을 클릭하면 moveNextPage 함수가 호출되는지 확인
    const nextButton = screen.getByTestId('next-btn');
    userEvent.click(nextButton);
    expect(mockNavigate).toHaveBeenCalledWith(`${mockPageging.path}/6`);

    // 마지막 페이지로 이동 버튼을 클릭하면 moveEndPage 함수가 호출되는지 확인
    const nextEndButton = screen.getByTestId('next-end-btn');
    userEvent.click(nextEndButton);
    expect(mockNavigate).toHaveBeenCalledWith(
      `${mockPageging.path}/${mockPageging.totalPageCnt}`
    );
  });
});
