import useUser from "@src/hooks/auth/useUser";

export default function RouterProtect({ children}{children:React.Node}){
	const { user } = useUser();

}