import { BasicResponse } from "./basicResponse";

type MemberType = {
	nickName: string;
  email: string;
  phoneNum: string;
  gender: string;
  academic: string;
  dept: string;
  birth: string;
  profileImg: string;
  gitHubLink: string;
  blogLink: string;
}

export interface GetMemberInfoResponse extends BasicResponse{
	result: MemberType;
}

export interface PutMemberInfoRequest extends MemberType{
	profileImg?: File;
}