import Http from '@src/network/http';
import {
  JoinRequest,
  JoinResponse,
  loginIdDuplicateRequest,
  loginIdDuplicateResponse,
  LoginRequest,
  LoginResponse,
} from '@src/service/types/auth';
import { AxiosRequestConfig } from 'axios';

export default class AuthService {
  constructor(private http: Http) {}

  async login({ loginId, password }: LoginRequest) {
    const options: AxiosRequestConfig = {
      method: 'POST',
      data: {
        loginId,
        password,
      },
    };
    return await this.http.fetchJson<LoginResponse>('/login', options);
  }

  async join(form: JoinRequest) {
    const options: AxiosRequestConfig = {
      method: 'POST',
      data: {
        ...form,
      },
    };

    return this.http.fetchJson<JoinResponse>('/join', options);
  }

  async loginIdDuplicate(data: loginIdDuplicateRequest) {
    const options: AxiosRequestConfig = {
      method: 'GET',
    };

    return await this.http.fetchJson<loginIdDuplicateResponse>(
      `/loginId/${data.loginId}`,
      options
    );
  }

  async logout() {
    const options: AxiosRequestConfig = {
      method: 'POST',
    };
    this.http.fetchJson(`/member/logout`, options);
  }
}
