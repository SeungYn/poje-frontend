import service from '@src/service';
import { useQuery } from '@tanstack/react-query';

export const useGetNoteList = () => {
  const { data } = useQuery(['note'], () => service.member.getNoteList(), {
    suspense: true,
  });

  return data!;
};

export const useGetNote = (portfolioId: string | number) => {
  const { data } = useQuery(
    ['note', portfolioId],
    () => service.member.getNote({ portfolioId }),
    {
      suspense: true,
    }
  );

  return data!;
};
