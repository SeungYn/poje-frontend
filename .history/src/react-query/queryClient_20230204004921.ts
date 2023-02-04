import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  queries: {
    staleTime: 600000,
    cacheTime: 900000,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  },
  mutations: {},
});
