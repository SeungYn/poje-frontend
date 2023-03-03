import Http from '@src/network/http';
import { AxiosRequestConfig } from 'axios';
import {
  MemberInfoResponse,
  MyPortfoliosResponse,
  PutMemberInfoRequest,
} from '@src/service/types/member';

export default class MemberService {
  constructor(private http: Http) {}

  async getMemberInfo() {
    const config: AxiosRequestConfig = {
      method: 'GET',
    };

    const {
      data: { result },
    } = await this.http.fetchJson<MemberInfoResponse>('member', config);

    return result;
  }

  async putMemberInfo(data: PutMemberInfoRequest) {
    const {
      email,
      nickName,
      phoneNum,
      gender,
      academic,
      dept,
      birth,
      gitHubLink,
      blogLink,
      profileImgFile,
    } = data;

    const formData = new FormData();
    formData.append(
      'memberUpdateReq',
      new Blob(
        [
          JSON.stringify({
            email,
            nickName,
            phoneNum,
            gender,
            academic,
            dept,
            birth,
            gitHubLink,
            blogLink,
          }),
        ],
        { type: 'application/json' }
      )
    );

    if (profileImgFile) {
      formData.append('projileImg', profileImgFile);
    }

    const config: AxiosRequestConfig = {
      method: 'PUT',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    const {
      data: { result },
    } = await this.http.fetchJson<MemberInfoResponse>(`/member`, config);

    return result;
  }

  async GetMyPortfolios() {
    const config: AxiosRequestConfig = {
      method: 'GET',
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    const {
      data: {
        result: { pfAndMemberResp },
      },
    } = await this.http.fetchJson<MyPortfoliosResponse>(
      `/member/my-portfolios`,
      config
    );

    return pfAndMemberResp;
  }
}
