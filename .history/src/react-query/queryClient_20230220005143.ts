import useModal from '@src/hooks/common/useModal';
import { QueryClient, QueryClientConfig } from '@tanstack/react-query';



const QueryErrorHandler = (err:Error)=>{
  const {setModal}  = useModal();
  setModal(err.message);
}

const queryConfig:QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 600000,
      cacheTime: 900000,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      
    },
    
    
  },
};

export const queryClient = new QueryClient(queryConfig);
