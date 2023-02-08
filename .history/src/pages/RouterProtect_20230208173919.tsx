import useUser from "@src/hooks/auth/useUser";
import { reactNode} from "react";

export default function RouterProtect({ children}{children:ReactNode}){
	const { user } = useUser();

}