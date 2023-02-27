import useModal from '@src/hooks/common/useModal';
import { QueryClient, QueryClientConfig ,QueryClientProvider} from '@tanstack/react-query';

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
  },
};

export const queryClient = new QueryClient(queryConfig);


export default function CustomQueryClient() {
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
    },
  };
  const queryClient = new QueryClient(queryConfig);
  return <QueryClientProvider client={queryClient } ><div></div></QueryClientProvider>;
}




