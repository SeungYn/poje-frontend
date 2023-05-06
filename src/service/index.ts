import Http from '@src/network/http';
import AuthService from '@src/service/authService';
import JobCardService from '@src/service/jobCardService';
import MemberService from '@src/service/memberService';
import { PortfolioService } from './portfolioService';

const http = Http.getHttpInstance();

const service = {
  auth: new AuthService(http),
  job: new JobCardService(http),
  portfolio: new PortfolioService(http),
  member: new MemberService(http),
};

export default service;

type a = typeof service.auth.join