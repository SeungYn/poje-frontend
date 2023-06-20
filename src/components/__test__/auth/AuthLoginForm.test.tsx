import AuthLoginForm from '@src/components/auth/AuthLoginForm';
import useAuth from '@src/hooks/auth/useAuth';
import { withAllContext, withMemoryRouter } from '@src/test_util/util';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route } from 'react-router-dom';

jest.mock('@src/hooks/auth/useAuth');
const mockedUseAuth: jest.Mock = useAuth as jest.MockedFunction<any>;

describe('AuthLoginForm', () => {
  beforeEach(() => {
    mockedUseAuth.mockImplementation(() => ({ login: jest.fn() }));
  });

  afterEach(() => {
    mockedUseAuth.mockReset();
  });

  it('처음 렌더링 화면', () => {
    const { asFragment } = render(
      withAllContext(
        withMemoryRouter(<Route path='/' element={<AuthLoginForm />} />, {
          initialEntries: ['/'],
        })
      )
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('아이디, 비밀번호 입력 후 submit 전송', async () => {
    const mockLogin = jest.fn();
    mockedUseAuth.mockImplementation(() => ({
      login: mockLogin,
    }));

    render(
      withAllContext(
        withMemoryRouter(<Route path='/' element={<AuthLoginForm />} />, {
          initialEntries: ['/'],
        })
      )
    );

    const loginInput = screen.getByPlaceholderText(
      'LoginId'
    ) as HTMLInputElement;
    const pwInput = screen.getByPlaceholderText('password') as HTMLInputElement;
    const submitBtn = screen.getByText('로그인');

    userEvent.type(loginInput, 'seungyn');
    userEvent.type(pwInput, 'seungyn');
    userEvent.click(submitBtn);

    await waitFor(() =>
      expect(mockLogin).toHaveBeenCalledWith({
        loginId: 'seungyn',
        password: 'seungyn',
      })
    );
  });
});
