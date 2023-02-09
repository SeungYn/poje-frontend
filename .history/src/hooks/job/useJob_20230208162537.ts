import { useQuery } from '@tanstack/react-query';
interface UseJobType {
  job: string;
}
export default function useJob({ job }: UseJobType) {
  const {} = useQuery();
  return 123;
}
