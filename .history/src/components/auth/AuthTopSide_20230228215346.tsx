import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BeforeBtn from "../common/BeforeBtn";
import { MoveToLoginOrSignUpBtn, TopSide } from "./styledComponets";

type PropsType = {
	isLogin: boolean;
}
export default function AuthTopSide({ isLogin }: PropsType) {
	const navigate = useNavigate();
	return (
		<TopSide>
			<BeforeBtn  onClick={ ()=>{navigate('/')}} />
        <RightGroup>
          <span>계정이 없으신가요?</span>
          <MoveToLoginOrSignUpBtn>
					<Link to={ isLogin ? '/auth/signup' : '/auth/signin'}>{ isLogin ? 'singIn' : 'signUp'}</Link>
          </MoveToLoginOrSignUpBtn>
        </RightGroup>
      </TopSide>
	);
}


const RightGroup = styled.div`
	display:flex;
`
