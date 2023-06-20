import '@testing-library/jest-dom';
import useFormValidation from '@src/hooks/auth/useFormValidation';
import { withAllContext } from '@src/test_util/util';
import { renderHook, act } from '@testing-library/react';

describe('useFormValidation', () => {
  it('아이디 중복검사 ✅', async () => {
    const { result, rerender } = renderHook(() => useFormValidation(), {
      wrapper: makeWrapper,
    });

    await act(async () => {
      await result.current.validLoginIdDuplicate('testuser');
    });

    expect(result.current.loginIdDuplicate?.isValid).toBe(true);
  });

  function makeWrapper({ children }: { children: React.ReactNode }) {
    return withAllContext(children);
  }
});
