import {
  PortfolioInfoContext,
  PortfolioInfoContextType,
} from '@src/context/PortfolioInfoContext';
import usePortfolioIntro from '@src/hooks/portfolio/intro/usePortfolioIntro';
import { mockPortfolioIntro } from '@src/test_util/mock/data/portfolio';
import { makeWrapperWithSuspense } from '@src/test_util/util';
import { act, renderHook } from '@testing-library/react';

describe('usePortfolioIntro custom hook test', () => {
  const mockInfoContext: PortfolioInfoContextType = {
    portfolioId: '3',
    permissionModify: true,
    portfolioEmail: 'test@naver.com',
  };

  it('mock data 요청 확인', async () => {
    const { result } = renderHook(() => usePortfolioIntro(), {
      wrapper: portfolioContextWrapper(mockInfoContext),
    });

    //suspense 사용시 비동기 기다려야됨
    await act(() => Promise.resolve());

    expect(result.current.pfIntro).toEqual(mockPortfolioIntro);
  });

  it('portfolio intro Update', async () => {
    const { result } = renderHook(() => usePortfolioIntro(), {
      wrapper: portfolioContextWrapper(mockInfoContext),
    });

    //suspense 사용시 비동기 기다려야됨
    await act(() => Promise.resolve());
    await act(() => {
      result.current.updateIntro({
        description: 'test',
        title: 'test',
        backgroundImgFile: null,
        portfolioId: '3',
      });
    });

    expect(result.current.pfIntro).toEqual(mockPortfolioIntro);
  });
});

export const portfolioContextWrapper = (context: PortfolioInfoContextType) => {
  return ({ children }: { children: React.ReactNode }) => {
    return (
      <PortfolioInfoContext.Provider value={context}>
        {makeWrapperWithSuspense({ children })}
      </PortfolioInfoContext.Provider>
    );
  };
};
