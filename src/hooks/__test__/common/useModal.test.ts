import useModal from '@src/hooks/common/useModal';
import { withAllContext } from '@src/test_util/util';
import { act, renderHook } from '@testing-library/react';

describe('useModal', () => {
  it('모달 출력 하기 ✅', async () => {
    const { result } = renderHook(() => useModal(), {
      wrapper: makeWrapper,
    });

    const mockedModalCallback = jest.fn();
    await act(() =>
      result.current.setModal('모달 띄우기', mockedModalCallback)
    );

    expect(result.current.modalContent.message).toBe('모달 띄우기');
    expect(result.current.isOpen).toBe(true);
  });

  it('모달 설정 하기(띄우기) ✅', async () => {
    const { result } = renderHook(() => useModal(), {
      wrapper: makeWrapper,
    });

    const mockedModalCallback = jest.fn();
    await act(() => {
      //모달 내용 설정
      result.current.setModal('모달 띄우기', mockedModalCallback);
    });

    expect(result.current.modalContent.message).toBe('모달 띄우기');
    expect(result.current.isOpen).toBe(true);
  });

  it('모달 설정 후 콜백 호출 확인 ✅', async () => {
    const { result } = renderHook(() => useModal(), {
      wrapper: makeWrapper,
    });

    const mockedModalCallback = jest.fn();
    await act(() => {
      result.current.setModal('모달 띄우기', mockedModalCallback);
    });
    await act(() => {
      result.current.closeModal();
    });

    expect(result.current.modalContent.message).toBe('');
    expect(mockedModalCallback).toBeCalled();
  });

  function makeWrapper({ children }: { children: React.ReactNode }) {
    return withAllContext(children);
  }
});
