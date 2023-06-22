import useJobCategory from '@src/hooks/job/useJobCategory';
import service from '@src/service';
import { mockJobCategory } from '@src/test_util/mock/data/job';
import { withAllContext } from '@src/test_util/util';
import { useQuery } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';

describe('useJobCategory Hook', () => {
  it('카테고리 배열이 받아와져야함', async () => {
    const { result } = renderHook(() => useJobCategory(), {
      wrapper: makeWrapper,
    });

    await waitFor(() =>
      expect(result.current.category).toEqual(mockJobCategory)
    );
  });
});

function makeWrapper({ children }: { children: React.ReactNode }) {
  return withAllContext(children);
}
