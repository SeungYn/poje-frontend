import useUser from "@src/hooks/auth/useUser";
import { ReactNode} from "react";

export default function RouterProtect({ children}{children:ReactNode}){
	const { user } = useUser();

}