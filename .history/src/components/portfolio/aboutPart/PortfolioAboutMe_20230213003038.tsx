import styled from 'styled-components';
import { BsFillPersonFill, BsFillPencilFill } from 'react-icons/bs';
import { AiFillCalendar } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { breakPoint } from '../../../styledComponents/media';
import usePortfolioAboutMe from '@src/hooks/portfolio/aboutMe/usePortfolioAboutMe';

export default function PortfolioAboutMe() {
  const { aboutMe } = usePortfolioAboutMe();
  return (
    <>
      <InfoList>
        <InfoItem>
          <BsFillPersonFill className='font' />
          <InfoText>
            <p>이름</p>
            <p>{aboutMe.nickName}</p>
          </InfoText>
        </InfoItem>
        <InfoItem>
          <MdEmail className='font' />
          <InfoText>
            <p>이메일</p>
            <p>{aboutMe.email}</p>
          </InfoText>
        </InfoItem>
        <InfoItem>
          <BsFillPersonFill className='font' />
          <InfoText>
            <p>연락처</p>
            <p>{aboutMe.phoneNum}</p>
          </InfoText>
        </InfoItem>
        <InfoItem>
          <AiFillCalendar className='font' />
          <InfoText>
            <p>생년월일</p>
            <p>{aboutMe.birth}</p>
          </InfoText>
        </InfoItem>
        <InfoItem>
          <BsFillPencilFill className='font' />
          <InfoText>
            <p>학력</p>
            <p>{aboutMe.academic}</p>
          </InfoText>
        </InfoItem>

        <InfoItem>
          <BsFillPencilFill className='font' />
          <InfoText>
            <p>학과</p>
            <p>{aboutMe.dept}</p>
          </InfoText>
        </InfoItem>
      </InfoList>
      <Footer>
        <SiteLink>{aboutMe.gitHubLink}</SiteLink>
        <SiteLink>{aboutMe.blogLink}</SiteLink>
      </Footer>
    </>
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

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SiteLink = styled.a``;
