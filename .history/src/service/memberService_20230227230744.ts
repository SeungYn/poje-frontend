import Http from '@src/network/http';
import { AxiosRequestConfig } from 'axios';
import { GetMemberInfoResponse, PutMemberInfoRequest } from '@src/service/types/member';

export default class MemberService {
  constructor(private http: Http) {}

  async getMemberInfo(){
    const config:AxiosRequestConfig = {
      method:'GET',
    }

    const {data:{result}} = await this.http.fetchJson<GetMemberInfoResponse>('member', config);
    return result;
  }

  async putMemberInfo(data: PutMemberInfoRequest){

  }
}
