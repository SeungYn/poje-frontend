import styled from 'styled-components';
import { BsFillPersonFill, BsFillPencilFill } from 'react-icons/bs';
import { AiFillCalendar } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { breakPoint } from '../../../styledComponents/media';
import * as S from '../styledComponents';

export default function PortfolioAboutMe() {
  return (
    <InfoList>
      <InfoItem>
        <BsFillPersonFill className='font' />
        <InfoText>
          <p>이름</p>
          <p>유명수</p>
        </InfoText>
      </InfoItem>
      <InfoItem>
        <MdEmail className='font' />
        <InfoText>
          <p>이메일</p>
          <p>fiweofjw@naf</p>
        </InfoText>
      </InfoItem>
      <InfoItem>
        <BsFillPersonFill className='font' />
        <InfoText>
          <p>연락처</p>
          <p>010631231231</p>
        </InfoText>
      </InfoItem>
      <InfoItem>
        <BsFillPencilFill className='font' />
        <InfoText>
          <p>이름</p>
          <p>유명수</p>
        </InfoText>
      </InfoItem>
      <InfoItem>
        <AiFillCalendar className='font' />
        <InfoText>
          <p>이름</p>
          <p>유명수</p>
        </InfoText>
      </InfoItem>

      <InfoItem>
        <FaMapMarkerAlt className='font' />
        <InfoText>
          <p>이름</p>
          <p>유명수</p>
        </InfoText>
      </InfoItem>
    </InfoList>
  );
}

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
