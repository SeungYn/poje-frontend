import Http from '@src/network/http';
import { LoginRequest } from '@src/service/types/auth';

export default class AuthService {
  constructor(private http: Http) {}

  async login({}: LoginRequest) {
    return await this.http.fetchJson<LoginRespo>();
  }
}
