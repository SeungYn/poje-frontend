import service from '@src/service';
import { useQuery } from '@tanstack/react-query';
interface UseJobType {
  job: string;
}
export default function useJobCategory() {
  const { data: catetefory } = useQuery(
    ['catefory'],
    async () => {
      return service.job.getJobCategory().then((res) => res.data);
    },
    {
      suspense: true,
    }
  );
  return { catetefory };
}
