import service from "@src/service";
import { useQuery } from "@tanstack/react-query";
import useUser from "../auth/useUser";

export default function useGetMyInfo() {
	const { user } = useUser();
	const { data } = useQuery(['myInfo'], async () => {
		return await service.member.getMemberInfo();
	}, {
		enabled: !!user,
	})
	return data;
}

