import Http from '@src/network/http';
import {
  JoinRequest,
  JoinResponse,
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

    return await this.http.fetchJson<JoinResponse>('/login', options);
  }
}
