import styled from 'styled-components';
import { BsFillPersonFill, BsFillPencilFill } from 'react-icons/bs';
import { AiFillCalendar } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { breakPoint } from '../../../styledComponents/media';
import { PortfolioAboutMePropType } from './portfolioAboutMeType';
import { useState } from 'react';
import useAboutMeModifyForm from '@src/hooks/portfolio/aboutMe/useAboutMeModifyForm';
import ModifyComfirmAndCancleGroup from '../common/ModifyComfirmAndCancleGroup';
import { useRecoilState } from 'recoil';
import { isModifyModeFormPortfolioAboutMe } from '@src/store/portfolio/modify';
import usePortfolioAboutMe from '@src/hooks/portfolio/aboutMe/usePortfolioAboutMe';
import LoadingSpiner from '../common/LoadingSpiner';

export default function PortfolioAboutMeModify(data: PortfolioAboutMePropType) {
  const { form, onChange, onSubmit } = useAboutMeModifyForm();
  const { isLoading } = usePortfolioAboutMe();
  const [isModifyMode, setIsModifyMode] = useRecoilState(
    isModifyModeFormPortfolioAboutMe
  );
  return (
    <FormContainer onSubmit={onSubmit}>
      {isLoading && <LoadingSpiner text={'업데이트중'} />}
      <InfoList>
        <InfoItem>
          <BsFillPersonFill className='font' />
          <InfoText>
            <p>이름</p>
            <InputText
              name='nickName'
              onChange={onChange}
              value={form.nickName || ''}
            />
          </InfoText>
        </InfoItem>
        <InfoItem>
          <MdEmail className='font' />
          <InfoText>
            <p>이메일</p>
            <InputText
              name='email'
              onChange={onChange}
              value={form.email || ''}
            />
          </InfoText>
        </InfoItem>
        <InfoItem>
          <BsFillPersonFill className='font' />
          <InfoText>
            <p>연락처</p>
            <InputText
              name='phoneNum'
              onChange={onChange}
              value={form.phoneNum || ''}
            />
          </InfoText>
        </InfoItem>
        <InfoItem>
          <AiFillCalendar className='font' />
          <InfoText>
            <p>생년월일</p>
            <InputText
              name='birth'
              onChange={onChange}
              value={form.birth || ''}
            />
          </InfoText>
        </InfoItem>
        <InfoItem>
          <BsFillPencilFill className='font' />
          <InfoText>
            <p>학력</p>
            <InputText
              name='academic'
              onChange={onChange}
              value={form.academic || ''}
            />
          </InfoText>
        </InfoItem>
        <InfoItem>
          <BsFillPencilFill className='font' />
          <InfoText>
            <p>학과</p>
            <InputText
              name='dept'
              onChange={onChange}
              value={form.dept || ''}
            />
          </InfoText>
        </InfoItem>
      </InfoList>

      <ModifyComfirmAndCancleGroup
        isModifyMode={isModifyMode}
        setIsModifyMode={setIsModifyMode}
        handleSubmit={() => {
          console.log('확인');
        }}
      />
    </FormContainer>
  );
}

const FormContainer = styled.form``;

const InfoList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .font {
    font-size: ${({ theme }) => theme.iconSize};
  }
`;

const InfoItem = styled.li`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;

  @media screen and (max-width: ${breakPoint.ss}) {
    flex-basis: 100%;
  }

  @media screen and (min-width: ${breakPoint.mmm}) {
    flex-basis: 50%;
  }

  @media screen and (min-width: ${breakPoint.mm}) {
    flex-basis: 30%;
  }
`;

const InfoText = styled.div`
  margin-left: 1rem;
  width: 100%;
  & p {
    font-size: ${({ theme }) => theme.fontMiddleSize};
  }

  & p:first-child {
    font-weight: bold;
  }
  & p:last-child {
    font-size: ${({ theme }) => theme.fontRegular};
  }
`;

const InputText = styled.input`
  font-size: ${({ theme }) => theme.fontRegular};
  width: 70%;
`;
