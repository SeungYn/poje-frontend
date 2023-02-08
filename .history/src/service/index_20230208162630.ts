import Http from '@src/network/http';
import AuthService from '@src/service/authService';
import JobCardService from '@src/service/jobCardService';
import { PortfolioService } from './portfolioService';

const http = Http.getHttpInstance();

const service = {
  auth: new AuthService(http),
  job: new JobCardService(http),
  portfolio: new PortfolioService(http),
};

export default service;
