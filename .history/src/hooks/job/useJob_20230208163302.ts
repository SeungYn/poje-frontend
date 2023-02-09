import service from '@src/service';
import { useQuery } from '@tanstack/react-query';
interface UseJobType {
  job: string;
}
export default function useJob({ job }: UseJobType) {
  const { data } = useQuery(['catefory'], async () => {
    return service.job.getJobCategory();
	}, {
		suspense: true;
	});
  return 123;
}
