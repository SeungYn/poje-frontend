import usePortfolioLists from '@src/hooks/job/usePortfolioLists';
import { mockAPIPortfolioList } from '@src/test_util/mock/data/job';
import { makeWrapperWithSuspense } from '@src/test_util/util';
import { act, renderHook } from '@testing-library/react';

describe('usePortfolioList Hook', () => {
  const testParams = { jobName: 'test', page: '1' };

  it('데이터가 받아와지는지 확인', async () => {
    const { result } = renderHook(() => usePortfolioLists(testParams), {
      wrapper: makeWrapperWithSuspense,
    });

    await act(() => Promise.resolve());

    expect(result.current).toEqual({
      pageingUtil: mockAPIPortfolioList.paging,
      pfAndMemberResp: mockAPIPortfolioList.pfAndMemberResp,
    });
  });
});
