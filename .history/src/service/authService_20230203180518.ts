import Http from '@src/network/http';

export default class AuthService {
  constructor(private http: Http) {}

  async login() {
    return await this.http.fetchJson();
  }
}
