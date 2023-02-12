export interface BasicResponse {
  code: number;
  message: string;
}

export interface BasicDataResponse extends BasicResponse {}

export interface BasicErrorResponse {
  timeStamp: string;
  status: number;
  error: string;
  code: string;
  message: string;
}
