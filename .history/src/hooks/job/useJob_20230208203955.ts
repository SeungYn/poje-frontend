import service from '@src/service';
import { JobCategoryResponse } from '@src/service/types/jobCard';
import { useQuery } from '@tanstack/react-query';
interface UseJobType {
  job: string;
}
export default function useJobCategory() {
  const { data: category } = useQuery(
    ['category'],
    () => {
      return service.job.getJobCategory();
    },
    {
      suspense: true,
    }
  );
  return { category };
}
