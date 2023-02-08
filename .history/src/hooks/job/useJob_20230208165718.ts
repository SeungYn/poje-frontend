import service from '@src/service';
import { useQuery } from '@tanstack/react-query';
interface UseJobType {
  job: string;
}
export default function useJobCategory() {
  const { data: catetegory } = useQuery(
    ['catefory'],
    () => {
      return service.job.getJobCategory();
    },
    {
      suspense: true,
    }
  );
  return { catetegory };
}
