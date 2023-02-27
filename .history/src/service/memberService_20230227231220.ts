import Http from '@src/network/http';
import { AxiosRequestConfig } from 'axios';
import { MemberInfoResponse, PutMemberInfoRequest } from '@src/service/types/member';

export default class MemberService {
  constructor(private http: Http) {}

  async getMemberInfo(){
    const config:AxiosRequestConfig = {
      method:'GET',
    }

    const {data:{result}} = await this.http.fetchJson<MemberInfoResponse>('member', config);
    return result;
  }

  async putMemberInfo(data: PutMemberInfoRequest){
    const {email,
      nickName,
      phoneNum,
      gender,
      academic,
      dept,
      birth,
      gitHubLink,
      blogLink,
      profileImgFile} = data;

    const formData = new FormData();
    formData.append(
      'memberUpdateReq',
      new Blob([
        JSON.stringify({email,
          nickName,
          phoneNum,
          gender,
          academic,
          dept,
          birth,
          gitHubLink,
          blogLink,}),
      ], {type:'application/json'});
    )
  }
}
