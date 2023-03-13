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
  opponentNickName: string;
  opponentEmail: string;
  lastMessage: string;
  sendTime: string;
  view: boolean;
};

export type SendNoteType = {
  message: string;
  sender: string;
  sendStatus: string;
  sendTime: string;
  senderEmail: string;
};

export type NoteType = {
  message: string;
  sender: string;
  sendStatus: string;
  sendTime: string;
};

export interface GetNoteListResponse extends BasicResponse {
  result: NoteListType[];
}

export interface GetNoteRequest {
  email: string;
}

export interface GetNoteResponse extends BasicResponse {
  result: NoteType[];
}

export interface SendNoteRequest {
  email: string;
  message: string;
}

export interface SendNoteResponse extends BasicResponse {
  result: SendNoteType;
}

export interface GetNoteCountResponse extends BasicResponse {
  result: { count: number };
}
