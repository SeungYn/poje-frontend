import { useQuery } from '@tanstack/react-query';
export default function useIntro() {
	//todo 인트로 보내기 가져오기 
	const {data} = useQuery(['portfolio', '1'], ()=> //api)
  return '123';
}
