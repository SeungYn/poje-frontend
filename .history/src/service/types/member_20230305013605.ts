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

export interface FindPasswordRequest {
  nickName: string;
  email: string;
}

export interface FindPasswordResponse extends BasicResponse {}

// 쪽지
export type NoteListType = {
  portfiolioId: number;
  title: string;
};

export type SendNoteType = {
  id: 32;
  message: '안녕하세요';
  sender: '싸르2';
  sendStatus: 'SEND';
  sendTime: '2023-02-23T01:48:27.437939';
};

export interface GetNoteListResponse extends BasicResponse {}
