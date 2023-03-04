import { BasicResponse } from './basicResponse';
import { PortfolioItemType } from './jobCard';

export type MemberType = {
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
};

export interface MemberInfoResponse extends BasicResponse {
  result: MemberType;
}

export interface PutMemberInfoRequest extends MemberType {
  profileImgFile?: File;
}

export interface MyPortfoliosResponse extends BasicResponse {
  result: {
    pfAndMemberResp: PortfolioItemType[];
  };
}

export interface UpdatePasswordRequest {
  existPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export interface UpdatePasswordResponse extends BasicResponse {}
