import service from '@src/service';
import { useQuery } from '@tanstack/react-query';

export default function useJobCategory() {
  const {
    data: category = [],
    isLoading,
    isSuccess,
  } = useQuery(
    ['category'],
    () => {
      return service.job.getJobCategory();
    },
    {
      onError: (e: unknown) => {
        console.log('에러에요에어에어에어에어에어에어에어');
      },
    }
  );
  return { category, isLoading, isSuccess };
}
