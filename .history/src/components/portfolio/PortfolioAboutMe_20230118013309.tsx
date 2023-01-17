import { AiFillTag } from 'react-icons/ai';
import styled from 'styled-components';
import { BsFillPersonFill, BsFillPencilFill } from 'react-icons/bs';
import { AiFillCalendar } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { breakPoint } from '../../styledComponents/media';

export default function PortfolioAboutMe() {
  return (
    <CommonSection>
      <CommonHeader>
        <AiFillTag />
        <HeaderTitle>About Me</HeaderTitle>
      </CommonHeader>
      <InfoList>
        <InfoItem>
          <BsFillPersonFill className='font' />
          <InfoText>
            <p>이름</p>
            <p>유명수</p>
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
          <BsFillPersonFill className='font' />
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
        <InfoItem>
          <MdEmail className='font' />
          <InfoText>
            <p>이름</p>
            <p>유명수</p>
          </InfoText>
        </InfoItem>
      </InfoList>
    </CommonSection>
  );
}

const CommonSection = styled.section`
  padding: 6rem 6rem 6rem 6rem;
`;

const CommonHeader = styled.div`
  color: ${({ theme }) => theme.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSectionTitle};
  gap: 1rem;
`;

const HeaderTitle = styled.h3`
  font-weight: 900;
  border-bottom: 1px solid black;
`;

const InfoList = styled.ul`
  display: flex;
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
    font-size: 1.6rem;
  }

  & p:first-child {
    margin-bottom: 0.4rem;
    font-weight: bold;
    background: black;
  }
`;
