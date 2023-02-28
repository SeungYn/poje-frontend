import service from "@src/service";
import { useQuery } from "@tanstack/react-query";

export default function useGetMyInfo() {
	const { data } = useQuery(['myInfo'], () => {
	
	})
	return (
		1
	);
}

