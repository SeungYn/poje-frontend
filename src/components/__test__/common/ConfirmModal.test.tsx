import ConfirmModal from '@src/components/common/ConfirmModal';
import useConfirmModal from '@src/hooks/common/useConfirmModal';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('@src/hooks/common/useConfirmModal');
const mockedUseConfirmModal: jest.Mock =
  useConfirmModal as jest.MockedFunction<any>;

describe('ConfirmModal', () => {
  afterEach(() => {
    mockedUseConfirmModal.mockReset();
  });

  it('확인 모달이 오픈이 아닐 때', () => {
    mockedUseConfirmModal.mockImplementation(() => ({ isOpen: false }));
    render(<ConfirmModal />);

    expect(screen.queryByText('확인')).toBeNull();
  });

  it('확인 모달이 오픈일 때', () => {
    mockedUseConfirmModal.mockImplementation(() => ({
      isOpen: true,
      modalContent: { message: '모달이당' },
      confirmModal: () => {},
      cancelModal: () => {},
    }));

    render(<ConfirmModal />);

    expect(screen.getByText('확인')).toBeInTheDocument();
    expect(screen.getByText('모달이당')).toBeInTheDocument();
  });

  it('확인 모달이 취소 클릭', () => {
    const mockedCancelModal = jest.fn();
    mockedUseConfirmModal.mockImplementation(() => ({
      isOpen: true,
      modalContent: { message: '모달이당' },
      confirmModal: () => {},
      cancelModal: mockedCancelModal,
    }));

    render(<ConfirmModal />);

    userEvent.click(screen.getByText('취소'));

    expect(mockedCancelModal).toBeCalled();
  });

  it('확인 모달이 확인 클릭', () => {
    const mockedConfirmModal = jest.fn();
    mockedUseConfirmModal.mockImplementation(() => ({
      isOpen: true,
      modalContent: { message: '모달이당' },
      confirmModal: mockedConfirmModal,
      cancelModal: () => {},
    }));

    render(<ConfirmModal />);

    userEvent.click(screen.getByText('확인'));

    expect(mockedConfirmModal).toBeCalled();
  });
});
