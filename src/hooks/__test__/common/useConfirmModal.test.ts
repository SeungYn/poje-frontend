import useConfirmModal from '@src/hooks/common/useConfirmModal';
import { withAllContext } from '@src/test_util/util';
import { act, renderHook } from '@testing-library/react';

describe('useConfirmModal', () => {
  it('모달 출력 하기 ✅', async () => {
    const { result } = renderHook(() => useConfirmModal(), {
      wrapper: makeWrapper,
    });

    const mockedModalCallback = jest.fn();
    await act(() =>
      result.current.setConfirmModal('모달 띄우기', mockedModalCallback)
    );

    expect(result.current.modalContent.message).toBe('모달 띄우기');
  });

  it('모달 콜백 호출 후 내용 지우기 ✅', async () => {
    const { result } = renderHook(() => useConfirmModal(), {
      wrapper: makeWrapper,
    });

    const mockedModalCallback = jest.fn();
    await act(() => {
      //모달 내용 설정
      result.current.setConfirmModal('모달 띄우기', mockedModalCallback);
    });
    await act(() => {
      //모달 콜백 호출
      result.current.confirmModal();
    });

    expect(mockedModalCallback).toBeCalled();
    expect(result.current.modalContent.message).toBe('');
  });

  it('모달 설정 후 취소 하기 ✅', async () => {
    const { result } = renderHook(() => useConfirmModal(), {
      wrapper: makeWrapper,
    });

    const mockedModalCallback = jest.fn();
    await act(() => {
      result.current.setConfirmModal('모달 띄우기', mockedModalCallback);
      result.current.cancelModal();
    });

    expect(result.current.modalContent.message).toBe('');
  });

  function makeWrapper({ children }: { children: React.ReactNode }) {
    return withAllContext(children);
  }
});
