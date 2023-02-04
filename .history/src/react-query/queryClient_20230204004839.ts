import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

const queryConfig: QueryClientConfig = {
  queries: {
    staleTime: 600000,
    cacheTime: 900000,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  },
  mutations: {},
};

export const queryClient = new QueryClient(queryConfig);
