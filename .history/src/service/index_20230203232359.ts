import Http from '@src/network/http';
import AuthService from '@src/service/authService';

const http = Http.getHttpInstance();

const service = {
  auth: new AuthService(http),
};
