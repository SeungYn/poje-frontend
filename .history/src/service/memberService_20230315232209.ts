import Http from '@src/network/http';
import { AxiosRequestConfig } from 'axios';
import {
  FindPasswordRequest,
  FindPasswordResponse,
  GetNoteAlarmResponse,
  GetNoteListResponse,
  GetNoteRequest,
  GetNoteResponse,
  MemberInfoResponse,
  MyPortfoliosResponse,
  PutMemberInfoRequest,
  SendNoteRequest,
  UpdatePasswordRequest,
  UpdatePasswordResponse,
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
      console.log(profileImgFile);
      formData.append('profileImg', profileImgFile);
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

  async updatePassword(data: UpdatePasswordRequest) {
    const config: AxiosRequestConfig = {
      method: 'PUT',
      data: {
        ...data,
      },
    };

    const { data: result } = await this.http.fetchJson<UpdatePasswordResponse>(
      '/member/password',
      config
    );
    return result;
  }

  async findPassword(data: FindPasswordRequest) {
    const config: AxiosRequestConfig = {
      method: 'POST',
      data: {
        ...data,
      },
    };

    const { data: result } = await this.http.fetchJson<FindPasswordResponse>(
      '/find/password',
      config
    );
    return result;
  }

  async getNoteList() {
    const config: AxiosRequestConfig = {
      method: 'GET',
    };

    const {
      data: { result },
    } = await this.http.fetchJson<GetNoteListResponse>(
      '/member/note-room',
      config
      );
    
    return result;
  }

  async getNote(data: GetNoteRequest) {
    const { email } = data;

    const config: AxiosRequestConfig = {
      method: 'GET',
    };

    const {
      data: { result },
    } = await this.http.fetchJson<GetNoteResponse>(
      `/member/note?email=${email}`,
      config
      );
    console.log(result,'note')
    return result;
  }

  async sendNote(data: SendNoteRequest) {
    const { email, message } = data;

    const config: AxiosRequestConfig = {
      method: 'POST',
      data: { email, message },
    };

    const { data: result } = await this.http.fetchJson<GetNoteResponse>(
      `/member/note`,
      config
    );
    return result;
  }

  async getNoteAlarm() {
    
    const config: AxiosRequestConfig = {
      method: 'GET',
    };

    const {
      data: { result },
    } = await this.http.fetchJson<GetNoteAlarmResponse>(
      `/member/note/alarm`,
      config
    );
    return result;
  }
}
