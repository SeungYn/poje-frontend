import { useMutation, useQuery } from '@tanstack/react-query';
export default function useGetPortfolioIntro({ id }: { id: string }) {
  //todo 인트로 보내기 가져오기
  const { data } = useQuery(['portfolio', '1'], () => console.log('api'));

  const updateIntro = useMutation<
    void,
    unknown,
    { title: string; description: string },
    unknown
  >((data) => {
    console.log(data);
    return Promise.resolve();
  }, {});

  return { updateIntro: updateIntro.mutate };
}
