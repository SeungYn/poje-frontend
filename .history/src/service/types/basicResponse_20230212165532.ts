export interface BasicResponse<T> {
  code: number;
  message: string;
  result: T;
}

export interface BasicDataResponse extends BasicResponse {}

export interface BasicErrorResponse {
  timeStamp: string;
  status: number;
  error: string;
  code: string;
  message: string;
}
