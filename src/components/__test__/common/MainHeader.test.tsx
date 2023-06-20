import '@testing-library/jest-dom';
import LoginView from '@src/components/common/LoginView';
import MainHeader from '@src/components/common/MainHeader';
import useUser from '@src/hooks/auth/useUser';
import { useNoteAlarm } from '@src/hooks/note';
import { withMemoryRouter } from '@src/test_util/util';
import { render, screen } from '@testing-library/react';
import { Route } from 'react-router-dom';

jest.mock('@src/hooks/auth/useUser', () => ({
  __esModule: true,
  default: jest.fn(),
}));
jest.mock('@src/hooks/note', () => ({
  __esModule: true,
  useNoteAlarm: jest.fn(),
}));

jest.mock('@src/components/common/LoginView', () => ({
  __esModule: true,
  default: jest.fn(),
}));

type MockedUseUser = () => { user: any };

// mock 메서드를 사용하도록 타입 추가
const mockedUseUser =
  useUser as MockedUseUser as jest.MockedFunction<MockedUseUser>;
const mockedUseNoteAlarm = useNoteAlarm as jest.MockedFunction<
  typeof useNoteAlarm
>;

describe('MainHeader test', () => {
  afterEach(() => {
    mockedUseUser.mockReset();
    mockedUseNoteAlarm.mockReset();
  });

  it('올바른 초기 렌더', () => {
    mockedUseUser.mockReturnValue({ user: true });
    mockedUseNoteAlarm.mockReturnValue(false);

    const { asFragment } = render(
      withMemoryRouter(
        <>
          <Route path='/' element={<MainHeader isHomePath={true} />} />
        </>,
        { initialEntries: ['/'] }
      )
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('로그인돼 있다면 노트 아이콘 표기', () => {
    mockedUseUser.mockReturnValue({ user: true });
    mockedUseNoteAlarm.mockReturnValue(false);

    render(
      withMemoryRouter(
        <>
          <Route path='/' element={<MainHeader isHomePath={true} />} />
        </>,
        { initialEntries: ['/'] }
      )
    );

    expect(screen.getByTitle('note-icon')).toBeInTheDocument();
  });

  it('로그인돼 있다면 노트 아이콘 표기 안함', () => {
    mockedUseUser.mockReturnValue({ user: false });
    mockedUseNoteAlarm.mockReturnValue(false);

    render(
      withMemoryRouter(
        <>
          <Route path='/' element={<MainHeader isHomePath={true} />} />
        </>,
        { initialEntries: ['/'] }
      )
    );

    //찾는 요소가 없으면 query로 했음 get은 요소가 없으면 에러를 발생하지만 query는 발생안함
    expect(screen.queryByTitle('note-icon')).not.toBeInTheDocument();
  });

  it('로그인돼 있고 새로운 쪽지가 있다면 N 표시', () => {
    mockedUseUser.mockReturnValue({ user: true });
    mockedUseNoteAlarm.mockReturnValue(true);

    render(
      withMemoryRouter(
        <>
          <Route path='/' element={<MainHeader isHomePath={true} />} />
        </>,
        { initialEntries: ['/'] }
      )
    );

    expect(screen.getByText('N')).toBeInTheDocument();
  });

  it('로그인돼 있고 새로운 쪽지가 없다면 N 표시 안함', () => {
    mockedUseUser.mockReturnValue({ user: false });
    mockedUseNoteAlarm.mockReturnValue(true);

    const { asFragment } = render(
      withMemoryRouter(
        <>
          <Route path='/' element={<MainHeader isHomePath={true} />} />
        </>,
        { initialEntries: ['/'] }
      )
    );

    expect(screen.queryByText('N')).not.toBeInTheDocument();
  });
});
