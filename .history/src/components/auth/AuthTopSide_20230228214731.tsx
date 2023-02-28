import { Link } from "react-router-dom";
import { MoveToLoginOrSignUpBtn, TopSide } from "./styledComponets";

type PropsType = {
	isLogin: boolean;
}
export default function AuthTopSide({isLogin}:PropsType) {
	return (
		<TopSide>
        <div>
          <span>계정이 없으신가요?</span>
          <MoveToLoginOrSignUpBtn>
					<Link to={ isLogin ? '/auth/signup' : '/auth/signin'}>{ isLogin ? 'singIn' : 'signUp'}</Link>
          </MoveToLoginOrSignUpBtn>
        </div>
      </TopSide>
	);
}

