import { BasicResponse } from '@/service/types/basicResponse';

export interface LoginRequest {
  loginId: string;
  password: string;
}

export interface JoinRequest {
  loginId: string;
  password: string;
  passwordConfirm: string;
  nickName: string;
  email: string;
  phoneNum: string;
  gender: string;
  birth: string;
}

export interface LoginResponse extends BasicResponse {}

export interface JoinResponse extends BasicResponss {}
