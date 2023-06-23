import useJobSearch from '@src/hooks/job/useJobSearch';
import { Suspense } from 'react';
import { mockAPIPortfolioList } from '@src/test_util/mock/data/job';
import { withAllContext } from '@src/test_util/util';
import { act, renderHook } from '@testing-library/react';

describe('useJobSearch Hook', () => {
  const testKeyword = { jobName: 'test', page: '1', keyword: 'test' };
  it('검색 키워드와 함께 useQuery 테스트', async () => {
    const { result } = renderHook(
      () => useJobSearch(testKeyword),

      { wrapper: makeWrapper }
    );

    await act(async () => {
      await Promise.resolve(); // 비동기 작업이 완료될 때까지 대기
    });

    expect(result.current).toEqual({
      pageingUtil: mockAPIPortfolioList.paging,
      pfAndMemberResp: mockAPIPortfolioList.pfAndMemberResp,
    });
  });
});

export function makeWrapper({ children }: { children: React.ReactNode }) {
  return withAllContext(<Suspense fallback={null}>{children}</Suspense>);
}
