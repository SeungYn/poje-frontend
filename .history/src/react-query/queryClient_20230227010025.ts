import useModal from '@src/hooks/common/useModal';
import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

const queryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 600000,
      cacheTime: 900000,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: (err:Error) => {
        const { setModal } = useModal();
        setModal(err.message);
      }
    }
  },
  
};

export const queryClient = new QueryClient(queryConfig);
