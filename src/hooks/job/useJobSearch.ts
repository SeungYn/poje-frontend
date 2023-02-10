import { useCallback } from 'react';
export default function useJobSearch() {
  const prefetchJobSearch = useCallback((keyword: string) => {
    //Todo 검색결과 프리패치 함수
    console.log('프리패칭 수행중 ...');
  }, []);

  const getJobListByKeyword = useCallback((keyword: string) => {
    //Todo 검색결과 반환하기
  }, []);
  return { prefetchJobSearch, getJobListByKeyword };
}
