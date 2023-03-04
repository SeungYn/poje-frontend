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
  portfolioId: string | number;
  title: string;
};

export type SendNoteType = {
  id: string | number;
  message: string;
  sendStatus: string;
  sendTime: string;
};

export type NoteType = {
  id: string | number;
  message: string;
  sender: string;
  sendStatus: string;
  sendTime: string;
};

export interface GetNoteListResponse extends BasicResponse {
  result: NoteListType[];
}

export interface GetNoteRequest {
  portfolioId: string;
}

export interface GetNoteResponse extends BasicResponse {
  result: NoteType[];
}

export interface SendNoteRequest {
  portfolioId: string;
  message: string;
}

export interface SendNoteResponse extends BasicResponse {
  result: SendNoteType[];
}
