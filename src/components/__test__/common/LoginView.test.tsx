import '@testing-library/jest-dom';
import { fakeUserInfo } from '@src/test_util/mock/user';
import { withAllContext, withMemoryRouter } from '@src/test_util/util';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route } from 'react-router-dom';
import LoginView from '@src/components/common/LoginView';
import useAuth from '@src/hooks/auth/useAuth';
import useUser from '@src/hooks/auth/useUser';
import useMyInfo from '@src/hooks/member/useMyInfo';

jest.mock('@src/hooks/auth/useUser');
const mockedUseUser: jest.Mock = useUser as jest.MockedFunction<any>;
jest.mock('@src/hooks/auth/useAuth');
const mockedUseAuth: jest.Mock = useAuth as jest.MockedFunction<any>;
jest.mock('@src/hooks/member/useMyInfo');
const mockedUseMyInfo: jest.Mock = useMyInfo as jest.MockedFunction<any>;

describe('LoginView', () => {
  beforeEach(() => {
    mockedUseUser.mockImplementation(() => ({ user: true }));
    mockedUseAuth.mockImplementation(() => ({ logOut: jest.fn() }));
    mockedUseMyInfo.mockImplementation(() => ({ userInfo: fakeUserInfo }));
  });

  afterEach(() => {
    mockedUseUser.mockReset();
    mockedUseAuth.mockReset();
    mockedUseMyInfo.mockReset();
  });

  it('로그인이 안 돼 있다면 로그인 버튼 출력', () => {
    mockedUseUser.mockImplementation(() => ({ user: false }));

    render(
      withAllContext(
        withMemoryRouter(
          <>
            <Route path='/' element={<LoginView isHomePath={true} />} />
          </>,
          { initialEntries: ['/'] }
        )
      )
    );

    const btn = screen.getByText('로그인');

    expect(btn).toBeInTheDocument();
  });

  it('로그인 돼있다면 로그인 뷰 출력', () => {
    render(
      withAllContext(
        withMemoryRouter(
          <>
            <Route path='/' element={<LoginView isHomePath={true} />} />
          </>,
          { initialEntries: ['/'] }
        )
      )
    );

    expect(screen.getByTitle('arrow-icon')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('내정보 클릭시 내정보 페이지로 이동', () => {
    render(
      withAllContext(
        withMemoryRouter(
          <>
            <Route path='/' element={<LoginView isHomePath={true} />} />
            <Route path='/member/myinfo' element={<div>내정보</div>} />
          </>,
          { initialEntries: ['/'] }
        )
      )
    );

    const myInfoBtn = screen.getByText('내 정보');
    userEvent.click(myInfoBtn);

    expect(screen.getByText('내정보')).toBeInTheDocument();
  });
});
