import service from '@src/service';
import { JobCategoryResponse } from '@src/service/types/jobCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useModal from '../common/useModal';
interface UseJobType {
  job: string;
}
export default function useJobCategory() {
  const { setModal } = useModal();
  const { data: category = [], isLoading } = useQuery(
    ['category'],
    () => {
      return service.job.getJobCategory();
    }, {
      onError: (e :unknown) => {
        if (axios.isAxiosError(e)) {
          setModal(e.message);
        }
      }
    }
  );
  return { category, isLoading };
}
