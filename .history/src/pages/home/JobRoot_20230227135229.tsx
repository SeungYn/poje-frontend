import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function JobRoot() {
	return (
		<JobRootContainer>
			<Outlet />
		</JobRootContainer>
	);
}

const JobRootContainer = styled.section`
	background-color: ${(props) => props.theme.bgSemiDarkColor};
	flex-grow: 1;
	width:100%;
	border:10px solid red;
	

`

