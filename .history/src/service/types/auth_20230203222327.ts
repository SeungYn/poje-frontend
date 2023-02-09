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
