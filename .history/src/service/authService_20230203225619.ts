import Http from '@src/network/http';
import { LoginRequest, LoginResponse } from '@src/service/types/auth';
import { AxiosRequestConfig } from 'axios';

export default class AuthService {
  constructor(private http: Http) {}

  async login({ loginId, password }: LoginRequest) {
    const config: AxiosRequestConfig = {
      method: 'POST',
      data: {
        loginId,
        password,
      },
    };
    return await this.http.fetchJson<LoginResponse>('login');
  }
}
